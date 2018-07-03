<template>
  <div class="bottom-info">
    信息来源：湖北省教育考试院（<span class="url" @click="gotoOutLink()">{{url}}</span>）
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
      url: 'http://www.hbea.edu.cn'
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
    gotoOutLink () {
      location.href = this.url
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-info {
    padding: 0.24rem 0.3rem;
    padding-top: 0;
    background-color: #F5F5F7;
    color: #666666;
    font-size: 0.24rem;
    font-weight: 300;
    .url {
      color: #0093FF;
    }
  }
</style>
