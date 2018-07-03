<template>
  <div class="header">
    <div class="title">
      {{question}}
    </div>
    <div class="count">
      共{{count}}个回答
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['question', 'count'],
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
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 0.3rem;
    background-color: #fff;
    margin-bottom: 0.2rem;
    .title {
      font-weight: 500;
      font-size: 0.36rem;
      line-height: 0.48rem;
      color: #333333;
    }
    .count {
      font-size: 0.28rem;
      line-height: 0.32rem;
      margin-top: 0.2rem;
      color: #666666;
    }
  }
</style>
