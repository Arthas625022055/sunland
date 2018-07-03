<template>
  <div class="from-info">
    <div class="content">
      ———— {{fromInfo.content}} ————
    </div>
    <div class="url" @click="gotoOutLink">
      {{fromInfo.url}}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['fromInfo'],
  data () {
    return {
      msg: ''
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
      location.href = this.fromInfo.url
    }
  }
}
</script>

<style lang="scss" scoped>
  .from-info {
    padding: 0.3rem 0;
    background-color: #F5F5F7;
    text-align: center;
    .content, .url{
      font-size: 0.24rem;
      line-height: 0.34rem;
    }
  }
  .url {
    color: #0093FF;
  }
</style>
