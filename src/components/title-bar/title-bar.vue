<template>
  <div class="">
    <div class="title-bar">
      <img :src="backIco" alt="" @click="goBack()">
      {{title}}
    </div>
    <div class="title">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['title', 'currentPage'],
  data () {
    return {
      msg: '',
      hierarchy: '',
      backIco: require('../../../static/images/major_return.png')
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    this.hierarchy = sessionStorage.getItem('hierarchy') * 1
  },
  watch: {
  },
  methods: {
    goBack () {
      if (this.hierarchy && this.hierarchy > 0) {
        this.hierarchy--
        sessionStorage.setItem('hierarchy', this.hierarchy)
      } else {
        sessionStorage.setItem('hierarchy', 0)
      }
      history.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-bar {
    width: 100%;
    height: 0.88rem;
    background-color: #fff;
    position: fixed;
    top: 0;
    text-align: center;
    font-size: 0.4rem;
    font-weight: 500;
    line-height: 0.88rem;
    z-index: 1000;
    border-bottom: 1px solid #E2E2E2;
    img {
      width: 0.44rem;
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
    }
  }
  .title{
    width: 100%;
    height: 0.88rem;
  }
</style>
