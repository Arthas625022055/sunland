<template>
  <div id="article-detail" v-if="articleContent">
    <load-fail
      @refresh="refresh"
      v-if="loadFail">
    </load-fail>
    <title-bar
      :currentPage="'ArticleDetail'"
      :title="'文章详情'">
    </title-bar>
    <div v-if="contentType==='obj'">
      <div class="title">
        {{articleContent.title}}
      </div>
      <div 
        :class="[setByContentType(item.type), setBlink(item.isBlinkAfter)]"
        v-html="item.content"
        v-if="item.content"
        @click="gotoTarget(item, $event, 'ArticleDetail', 'V1.0_articleDetail.link_' + (index + 1))"
        v-for="(item, index) in articleContent.contentList"
        :key="index">
      </div>
    </div>
    <div v-if="contentType==='html'" v-html="articleContent">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import articleData from '../../../static/js/article.json'
import titleBar from '../../components/title-bar/title-bar.vue'
import loadFail from '../../components/load-fail/load-fail.vue'
import common from '../../common/common.js'
import articleApi from '../../api/article'
import { Indicator } from 'mint-ui'

export default {
  name: 'articleDetail',
  components: {
    titleBar,
    loadFail
  },
  data () {
    return {
      msg: '新项目',
      articleContent: null,
      feedList: [],
      errorTime: 0,
      loadFail: false,
      contentType: ''
    }
  },
  mounted () {
    console.log(articleData)
    this.id = common.getUrlparam(decodeURI(location.href)).id * 1
    this.articleId = common.getUrlparam(decodeURI(location.href)).articleId
    this.setArticleContent()
    setTimeout(()=>{
      this.resetImg()
    },500)
  },
  methods: {
    setArticleContent () {
      if (this.id) {
        this.contentType = 'obj'
        articleData.forEach((item) => {
          if (item.id === this.id) {
            item.contentList.forEach((it)=>{
              if (it.content.indexOf('<br/>') >= 0) {
                it.content = it.content.replace(/<br\/>/g, '<div style="width:100%;height:0.4rem;"></div>')
              }
            })
            this.articleContent = item
          }
        })
      } else if (this.articleId) {
        this.contentType = 'html'
        Indicator.open('数据加载中……')
        let param = {}
        param.articleId = this.articleId.split('_').pop()
        articleApi.getArticle(param).then((res) => {
          Indicator.close()
          this.articleContent = res.data.msg[0].articleContent
        }).catch((err) => {
          Indicator.close()
          if (this.errorTime < 3) {
            this.setArticleContent()
            this.errorTime++
          } else {
            this.loadFail = true
            this.errorTime = 0
          }
        })
      }
    },
    refresh () {
      location.reload()
    },
    resetImg () {
      let arr = document.getElementsByTagName('img')
      let maxWidth = document.body.clientWidth
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].width && arr[i].width > maxWidth) {
          let width = arr[i].width
          let height = arr[i].height
          arr[i].width = maxWidth
          arr[i].height = (maxWidth / width) * height
        }
      }
    },
    gotoTarget (item) {
      if (item.type === 'link' && item.targetId) {
        location.href='article-detail.html?id=' + item.targetId
      } else if (item.type === 'link' && !item.targetId) {
        // location.href = item.content
        common.gotoOutLink(item.content)
      }
    },
    setBlink (isBlinkAfter) {
      if (isBlinkAfter) {
        return 'blank'
      }
    },
    setByContentType (type) {
      if (type === 'introduction') {
        return 'content-intro'
      } else if (type === 'subTitle') {
        return 'content-sub-title'
      } else if (type === 'section') {
        return 'content-text'
      } else if (type === 'link') {
        return 'content-link'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #article-detail {
    font-size: 0.28rem;
    color: #555555;
    .title {
      font-size: 0.4rem;
      font-weight: 500;
      color: #222;
      text-align: center;
      padding: 0.4rem 0.3rem;
      padding-bottom: 0;
    }
    .content-intro {
      margin: 0.4rem 0.3rem;
      padding: 0.5rem 0.24rem;
      border-radius: 0.12rem;
      background-color: #EEF6FC;
      font-size: 0.26rem;
      line-height: 0.4rem;
    }
    .content-text {
      margin: 0.4rem 0.3rem;
      line-height: 0.54rem;
    }
    .content-sub-title {
      margin: 0.4rem 0.3rem;
      font-size: 0.32rem;
      font-weight: 500;
      color: #333;
    }
    .content-link {
      margin: 0.4rem 0.3rem;
      color: #0093FF;
    }
    .blank {
      margin-bottom: 1rem;
    }
  }
</style>
