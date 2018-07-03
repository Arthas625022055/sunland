<template>
  <div class="fail-load">
    <div class="ico">
      <img :src="failImg" alt="">
    </div>
    <div class="tip">
      <div class="title">
        加载失败
      </div>
      <div class="text">
        点击按钮，重新加载
      </div>
    </div>
    <div class="btn" @click="refresh()">
      重试
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      msg: '',
      failImg: require('../../../static/images/load_fail.png')
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
    refresh () {
      this.$emit('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>
  .fail-load {
    padding-top: 0.5rem;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3000;
    background-color: #F5F5F7;
    font-size: 14px;
    text-align: center;
  }
  .ico {
    margin: 0 auto;
    width: 3.8rem;
    padding: 0;
    margin-bottom: 38px;
    img {
      width: 100%;
    }
  }
  .tip {
    .title {
      font-size: 0.36rem;
      color: #333333;
      margin-bottom: 0.24rem;
    }
    .text {
      color: #999999;
      margin-bottom: 0.72rem;
    }
  }
  .btn {
    width: 2.16rem;
    height: 0.72rem;
    margin: 0 auto;
    border: 0.02rem solid #0093FF;
    color: #0093FF;
    font-size: 0.32rem;
    line-height: 0.72rem;
    text-align: center;
    border-radius: 0.5rem;
    background-color: #fff;
  }
</style>
