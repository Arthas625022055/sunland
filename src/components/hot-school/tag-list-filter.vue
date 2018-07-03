<template>
  <div class="tag-list">
    <div
      @click="selectTag(item, $event, 'HotSchool', 'V1.0_hotSchool.tag_' + (index + 1))"
      v-for="(item, index) in tagList"
      :key="index" 
      :class="['tag', setTagColor(item)]">
      {{item.text}}
      <img :src="selectIco" alt="" v-if="setTagColor(item)">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['tagList', 'profession', 'school'],
  data () {
    return {
      msg: '',
      selectIco: require('../../../static/images/select.png')
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
    setTagColor (item) {
      if (item.sel) {
        return 'tag-selected'
      }
    },
    selectTag (item, event, ) {
      if (this.school && !this.profession) {
        this.$emit('selectedBySchoolTag', item)
      } else if (!this.school && this.profession) {
        this.$emit('selectedByProfessionTag', item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tag-list {
    padding: 0.3rem;
    padding-bottom: 0.2rem;
    display: flex;
    .tag {
      position: relative;
      font-size: 0.24rem;
      line-height: 0.24rem;
      padding: 0.16rem;
      margin-right: 0.2rem;
      background-color: #F5F5F7;
      border: 0.02rem solid #F5F5F7;
      border-radius: 0.04rem;
    }
    .tag-selected {
      background-color: #fff;
      border: 0.02rem solid #FF6767;
      border-radius: 0.04rem;
      color: #FF6767;
      img {
        width: 0.36rem;
        height: 0.3rem;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
</style>
