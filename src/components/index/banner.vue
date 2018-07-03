<template>
  <div class="index-banner">
    <div class="banner-list">
      <div v-for="(item, index) in banner.bannerList" class="item" :key="index" @click="gotoArticle(index, $event, 'Index', 'V1.0_index.card_' + (index + 1))">
        <div class="item-ico">
          <img :src="item.icon" alt="">
        </div>
        <div class="item-title">
          {{item.text}}
        </div>
      </div>
    </div>
    <div class="arrow" v-show="showGuide">
      <img class="guide-ico" :src="guideIco" alt="">
    </div>
    <div class="banner-guide" v-show="showGuide">
      <div class="close-ico" @click="close($event, 'Index', 'V1.0_index.guide.close')">
        <img :src="closeIco" alt="">
      </div>
      <div class="guide-content" v-for="(item, $index) in banner.guideList" @click="gotoArticle(0, $event, 'Index', 'V1.0_index.guide_' + (index + 1))">
        <transition
            name="bounce"
            >
          <div class="guide-item" :style="{'z-index': getZIndex($index)}" v-show="item.isShow">
            <div class="guide-question">
              {{item.question}}
            </div>
            <div class="guide-answer">
              {{item.answer}}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['banner'],
  data () {
    return {
      msg: '',
      currentIndex: 0,
      showGuide: true,
      guideIco: require('../../../static/images/home_guide.png'),
      closeIco: require('../../../static/images/home_close.png')
    }
  },
  computed: {
  },
  created () {
    if (localStorage.getItem('hideGuide') * 1 === 2) {
      this.showGuide = false
    }
    this.changeShowGuide()
    this.timer()
  },
  mounted () {
  },
  watch: {
    currentIndex (val, oldVal) {
      if (val !== oldVal) {
        this.changeShowGuide()
      }
    }
  },
  methods: {
    timer () {
      setTimeout(() => {
        this.changeIndex()
        this.timer()
      }, 3000)
    },
    close (event, moduleName, elemName) {
      let params = {}
      params.ele = event
      params.moduleName = moduleName
      params.elementName = elemName
      sl.ep(params)
      this.showGuide = false
      localStorage.setItem('hideGuide', 2)
    },
    changeShowGuide () {
      this.banner.guideList.forEach((item, index) => {
        if (index === this.currentIndex) {
          item.isShow = true
          this.banner.guideList.splice(index, 1, item)
        } else {
          item.isShow = false
          this.banner.guideList.splice(index, 1, item)
        }
      })
    },
    getZIndex (index) {
      return index + 1
    },
    gotoArticle (index, event, moduleName, elemName) {
      let params = {}
      params.e = event
      params.moduleName = moduleName
      params.elemName = elemName
      console.log(params)
      sl.mlc(params)
      let id
      if (index === 0) {
        id = 1
      } else if (index === 1) {
        id = 7
      } else if (index === 2) {
        id = 8
      } else if (index === 3) {
        id = 9
      } else if (index === 4) {
        id = 10
      }
      location.href='article-detail.html?id=' + id
    },
    changeIndex () {
      if (this.currentIndex < this.banner.guideList.length - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-out 1s;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    top: 0.92rem;
  }
  100% {
    opacity: 1;
    top: 0rem;
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
    top: 0rem;
  }
  100% {
    top: -0.92rem;
    opacity: 0;
  }
}
.index-banner {
  padding: 0.3rem;
  border-bottom: 0.2rem solid #F5F5F7;
  .banner-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    .item-ico {
      width: 0.9rem;
      height: 0.9rem;
      display: flex;
      justify-content: center;
      align-items: center;
      /*border:1px dashed #333;*/
      img {
        width: 0.6rem;
      }
    }
    .item-title {
      font-size: 0.24rem;
      line-height: 0.34rem;
      color: #222;
    }
  }
  .arrow {
    position: relative;
    img {
      width: 0.54rem;
      height: 0.42rem;
      position: absolute;
      left: 0.36rem;
      top: 0;
    }
  }
  .banner-guide {
    margin-top: 0.42rem;
    background-color: #EEF6FC;
    padding: 0.38rem 0.3rem;
    position: relative;
    border-radius: 0.12rem;
    overflow: hidden;
    max-height: 0.92rem;
    min-height: 0.92rem;
    .close-ico {
      width: 0.46px;
      height: 0.46px;
      position: absolute;
      z-index: 500;
      top: 0.3rem;
      right: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.23rem;
        height: 0.23rem;
      }
    }
    .guide-content {
      position: absolute;
      left: 0;
      top: 0.38rem;
      width: 100%;
      height: 0.92rem;
      .guide-item {
        position: absolute;
        width: 95%;
        padding: 0 0.3rem;
        left: 0;
        min-height: 0.92rem;
      }
      .guide-question {
        font-size: 0.32rem;
        color: #0093FF;
        font-weight: 350;
      }
      .guide-answer {
        font-size: 0.26rem;
        color: #666;
        margin-top: 0.12rem;
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
