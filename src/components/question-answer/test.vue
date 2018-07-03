<template>
  <div class="test">
    <div class="content">
      <img :src="testImg" alt="">
      <div class="title">
        测一测，我如何快速提升学历
        <div class="subtitle">
          共计7道题
        </div>
      </div>
      <mt-button
        class="start-btn"
        type="primary"
        size="small"
        @click="gotoTest()">
        开始测试
      </mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  props: [],
  data () {
    return {
      msg: '',
      testImg: require('../../../static/images/test.png')
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    gotoTest () {
      location.href='./test.html'
    }
  }
}
</script>

<style lang="scss" scoped>
  .test {
    background-color: #fff;
    padding: 0.3rem;
    .content {
      position: relative;
      width: 100%;
      height: 2.4rem;
      border-radius: 0.12rem;
      overflow: hidden;
      img {
        width: 100%;
      }
      .title {
        font-size: 0.32rem;
        line-height: 0.44rem;
        color: #333333;
        position: absolute;
        z-index: 1;
        top: 0.24rem;
        left: 0.3rem;
        .subtitle {
          font-size: 0.28rem;
          line-height: 0.3rem;
          color: #808080;
          font-weight: 300;
          margin-top: 0.12rem;
        }
      }
      .start-btn {
        position: absolute;
        left: 0.3rem;
        bottom: 0.26rem;
        font-weight: 400;
        padding: 0 0.3rem;
        border-radius: 0.6rem;
      }
    }
  }
</style>
