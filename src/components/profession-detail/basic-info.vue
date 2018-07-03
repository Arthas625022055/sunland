<template>
  <div class="">
    <info-content
      :title="'专业介绍'"
      :content="basicInfo.intro"
      :type="'string'">
    </info-content>
    <info-content
      :title="'专业优势'"
      :content="basicInfo.advantageList"
      :type="'list'">
    </info-content>
    <info-content
      :title="'就业方向'"
      :content="basicInfo.workList"
      :type="'cardList'">
    </info-content>
    <info-content
      :title="'报考条件'"
      :content="basicInfo.applyingCondtion"
      :type="'list'">
    </info-content>
  </div>
</template>

<script>
import infoContent from './info-content.vue'
export default {
  name: '',
  components: {
    infoContent
  },
  props: ['basicInfo'],
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
</style>
