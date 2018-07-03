<template>
  <div class="">
    <div class="content-header">
      <div class="content">
        <div class="title" v-if="title">
          <div class="title-ico">
          </div>
          <div class="title-text">
            {{title}}
          </div>
        </div>
        <div class="header-require" v-if="requireScore && requireScore.replace(/\s+/g, '')">
          最低学分要求：{{requireScore}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['title', 'requireScore'],
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
  .content-header {
    padding: 0 0.2rem;
    .content {
      width: 100%;
      display: flex;
      padding: 0.22rem 0rem;
      border-bottom: 1px solid #E2E2E2;
      justify-content: space-between;
    }
    .title {
      display: flex;
      align-items: center;
      .title-ico {
        width: 0.06rem;
        height: 0.24rem;
        background-color: #0093FF;
      }
      .title-text {
        font-size: 0.32rem;
        font-weight: 500;
        color: #333333;
        margin-left: 0.1rem;
      }
    }
    .header-require {
      font-size: 0.28rem;
      color: #F68E11;
    }
  }
</style>
