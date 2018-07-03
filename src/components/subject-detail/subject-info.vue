<template>
  <div class="subject-info">
    <sub-title
      class="sub-title"
      :title="'教材信息'">
    </sub-title>
    <div class="info-text">
      <div class="name">
        教材名称：
      </div>
      <div class="content">
        {{subjectData.bookName}}
      </div>
    </div>
    <div class="info-text">
      <div class="name">
        主编：
      </div>
      <div class="content">
        {{subjectData.writer}}
      </div>
    </div>
    <div class="info-text">
      <div class="name">
        出版社：
      </div>
      <div class="content">
        {{subjectData.press}}
      </div>
    </div>
    <div class="info-text">
      <div class="name">
        版次：
      </div>
      <div class="content">
        {{subjectData.editionNum}}
      </div>
    </div>
  </div>
</template>

<script>
import subTitle from '../profession-detail/sub-title.vue'
export default {
  name: '',
  components: {
    subTitle
  },
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
  .subject-info {
    font-size: 0.28rem;
    line-height: 0.5rem;
    padding-left: 0.1rem;
    background-color: #fff;
    padding-bottom: 0.3rem;
    .info-text {
      display: flex;
      .name{
        width: 1.4rem;
        color: #666666;
        padding-left: 0.2rem;
      }
      .content {
      }
    }
  }
</style>
<style>
  .sub-title .content-header {
    border-bottom: none !important;
  }
</style>
