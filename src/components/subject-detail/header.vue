<template>
  <div class="">
    <div class="subject-name">
      {{subjectData.lesson}}
    </div>
    <div class="tips">
      <div class="tip-text">
        关注自考来了公众号获取全部资料，
      </div>
      <div class="tip-btn">
        点击关注
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['subjectData'],
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
  .subject-name {
    font-size: 0.4rem;
  }
  .tips {
    font-size: 0.32rem;
    display: flex;
  }
</style>
