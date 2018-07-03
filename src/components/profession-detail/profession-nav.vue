<template>
  <div class="nav-list">
    <div class="content">
      <div class="nav" v-for="(item, index) in navList">
        <div :class="['item', isSelect(item)]" @click="selectOption(index, $event, 'ProfessionDetail', 'V1.0_professionDetail.nav_' + (index + 1))" :key="index">
          {{item.name}}
          <div class="item-bottom" v-show="item.isSelect">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'professionNav',
  components: {},
  props: ['navList'],
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
    isSelect (item) {
      if (item.isSelect) {
        return 'selected'
      }
    },
    selectOption (index, event, moduleName, elemName) {
      let params = {}
      params.ele = event
      params.moduleName = moduleName
      params.elementName = elemName
      sl.ep(params)
      this.$emit('selectOption', index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-list {
    height: 0.88rem;
    font-size: 0.28rem;
    padding: 0 0.2rem;
    .content {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #E7E7E7;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .item {
      .item-bottom {
        width: 100%;
        margin: 0 auto;
        position: relative;
        top: 0.2rem;
        border-bottom: 3px solid #0093FF;
      }
    }
    .selected {
      color: #0093FF;
    }
  }
</style>
