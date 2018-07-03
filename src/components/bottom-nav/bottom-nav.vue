<template>
  <div class="bottom-nav">
    <div class="nav-item" v-for="(item, index) in navList" :key="index" @click="select(item, $event, 'Bottom', 'V1.0_bottom.nav_' + (index + 1))">
      <img :src="setShowImg(item)" alt="">
      <div :class="['item-name', isSeleted(item)]">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['currentPage'],
  data () {
    return {
      msg: '',
      navList:
      [
        {
          name: '首页',
          isSeleted: true,
          unselectImg: require('../../../static/images/ic_home_default.png'),
          selectImg: require('../../../static/images/ic_home_selected.png')
        },
        {
          name: '专业院校',
          isSeleted: false,
          unselectImg: require('../../../static/images/ic_academy_default.png'),
          selectImg: require('../../../static/images/ic_academy_selected.png')
        },
        {
          name: '问答',
          isSeleted: false,
          unselectImg: require('../../../static/images/ic_q&a_default.png'),
          selectImg: require('../../../static/images/ic_q&a_selected.png')
        },
        {
          name: '反馈交流',
          isSeleted: false,
          unselectImg: require('../../../static/images/ic_feedback_default.png'),
          selectImg: require('../../../static/images/ic_feedback_selected.png')
        }
      ]
    }
  },
  computed: {
  },
  created () {
    if (this.currentPage === 'index') {
      this.changeColor('首页')
    } else if (this.currentPage === 'hotSchool') {
      this.changeColor('专业院校')
    } else if (this.currentPage === 'questionAnswer') {
      this.changeColor('问答')
    } else if (this.currentPage === 'feedback') {
      this.changeColor('反馈交流')
    }
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    setShowImg (item) {
      if (item.isSeleted) {
        return item.selectImg
      } else {
        return item.unselectImg
      }
    },
    isSeleted (item) {
      if (item.isSeleted) {
        return 'selected'
      }
    },
    changeColor (name) {
      this.navList.forEach((item) => {
        if (item.name === name) {
          item.isSeleted = true
        } else {
          item.isSeleted = false
        }
      })
    },
    select (item, event, moduleName, elemName) {
      let params = {}
      params.ele = event
      params.moduleName = moduleName
      params.elementName = elemName
      sl.ep(params)
      this.navList.forEach((item) => {
        item.isSeleted = false
      })
      item.isSeleted = true
      if (item.name === '首页') {
        location.href = 'index.html'
        sessionStorage.setItem('currentBar', '')
      } else if (item.name === '专业院校') {
        location.href = 'hot-school.html'
        sessionStorage.setItem('currentBar', '可选专业')
      } else if (item.name === '问答') {
        location.href = 'question-answer.html'
        sessionStorage.setItem('currentBar', '')
      } else if (item.name === '反馈交流') {
        location.href = 'feedback.html'
        sessionStorage.setItem('currentBar', '')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-nav {
    width: 100%;
    height: 0.9rem;
    background-color: rgba(255, 255, 255, 1);
    border-top: 0.02rem solid #F2F2F2;
    position: fixed;
    bottom: 0;
    z-index: 100;
    display: flex;
    font-size: 0.24rem;
    justify-content: space-around;
    user-select:none;
    .nav-item {
      text-align: center;
      img {
        width: 0.54rem;
      }
      .item-name {
        transform: scale(0.8);
        margin-top: -3px;
      }
      .selected {
        color: #0093FF;
      }
    }
  }
</style>
