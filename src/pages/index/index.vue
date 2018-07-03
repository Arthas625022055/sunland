<template>
  <div
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="0"
    :infinite-scroll-immediate-check = "false"
    id="index">
    <load-fail
      @refresh="refresh"
      v-if="loadFail">
    </load-fail>
    <index-header
      :header="header"
      :remainDay="remainDay"
      :mapPosition="mapPosition">
    </index-header>
    <index-banner
      v-if="banner"
      :banner="banner">
    </index-banner>
    <index-feeds
      v-if="feedList.length"
      :feedList="feedList">
    </index-feeds>
    <load-more
      :loading="loading"
      :isAllLoaded="isAllLoaded"
      :addText="addText">
    </load-more>
    <bottom-nav :currentPage="'index'"></bottom-nav>
    <div id="allmap" style="width:0px;height:0px;position:absolute;top:-1000px;overflow:hidden;"></div>
  </div>
</template>

<script>
/* eslint-disable */
import bottomNav from '../../components/bottom-nav/bottom-nav.vue'
import indexHeader from '../../components/index/header.vue'
import indexBanner from '../../components/index/banner.vue'
import indexFeeds from '../../components/index/feeds.vue'
import loadFail from '../../components/load-fail/load-fail.vue'
import loadMore from '../../components/load-more/load-more.vue'
import indexData from '../../../static/js/index.json'
import articleApi from '../../api/article'
import { Indicator } from 'mint-ui'

export default {
  name: 'index',
  components: {
    bottomNav,
    indexBanner,
    indexHeader,
    indexFeeds,
    loadFail,
    loadMore
  },
  data () {
    return {
      msg: '新项目',
      id: 1,
      remainDay: 0,
      start: 1,
      number: 5,
      addText: '数据加载中……',
      mapPosition: '',
      header: {},
      banner: '',
      errorTime: 0,
      loading: false,
      isAllLoaded: false,
      loadFail: false,
      feedList: []
    }
  },
  mounted () {
    this.header = indexData.header
    this.banner = indexData.banner
    this.calsulateRemainDay()
    this.getPosition()
  },
  watch: {
    loading (val) {
      if (val) {
        this.getJsonData()
      }
    }
  },
  methods: {
    getJsonData () {
      let param = {}
      param.start = this.start
      param.number = this.number
      articleApi.getArticleList(param).then((res) => {
        this.addFeed(res.data.msg)
        if (res.data.msg.length) {
          this.start += this.number
          this.loading = false
        } else {
          this.isAllLoaded = true
        }
      }).catch((error) => {
        if (this.errorTime < 3) {
          this.getJsonData()
          this.errorTime++
        } else {
          this.loadFail = true
          this.errorTime = 0
        }
      })
    },
    refresh () {
      location.reload()
    },
    addFeed (list) {
      list.forEach((item) => {
        this.feedList.push(item)
      })
    },
    calsulateRemainDay () {
      let year = this.header.deadline.split(/[-/]/)[0] * 1
      let month = this.header.deadline.split(/[-/]/)[1] * 1 - 1
      let date = this.header.deadline.split(/[-/]/)[2] * 1
      let deadlineDay = new Date(year, month, date) * 1
      let Today = new Date() * 1
      this.remainDay = Math.ceil((deadlineDay - Today) / (24 * 60 * 60 * 1000))
      console.log(this.remainDay)
    },
    getPosition () {
      let _this = this
      let map = new BMap.Map('allmap')
      let point = new BMap.Point(116.331398, 39.897445)
      map.centerAndZoom(point, 12)
      let geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() === 0) {
          let mk = new BMap.Marker(r.point)
          map.addOverlay(mk)
          map.panTo(r.point)
          _this.mapPosition = r.address.province
          console.log(_this.mapPosition)
        } else {
          _this.mapPosition = '定位失败'
        }
      })
    },
    loadMore () {
      this.loading = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  #index {
    height: 110%;
    overflow-y: scroll;
    padding-bottom: 0.9rem;
    overflow-scrolling : touch;
  }
  .mint-indicator-wrapper {
    z-index: 1000;
  }
</style>
