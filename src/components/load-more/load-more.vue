<template>
  <div class="load-more">
    <mt-spinner type="snake" :size="20" v-show="loading&&!isAllLoaded">
    </mt-spinner>
    <div class="txt" v-show="loading&&!isAllLoaded">
      {{addText}}
    </div>
    <div v-show="isAllLoaded">
      已全部加载完毕
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['addText', 'loading', 'isAllLoaded'],
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
.load-more {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.28rem;
  color: #666666;
  .txt{
    margin-left: 0.2rem;
  }
}
</style>
