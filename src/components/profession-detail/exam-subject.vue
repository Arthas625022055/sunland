<template>
  <div class="">
    <info-content
      :title="'考试说明'"
      :content="examSubject.description"
      :type="'list'">
    </info-content>
    <info-content
      v-for="(item, index) in examSubject.subjectTypeList"
      :key="index"
      :education="education"
      :title="item.subjectTypeName"
      :content="item.subjectList"
      :requireScore="item.minRequeireScore"
      :type="'table'">
    </info-content>
  </div>
</template>

<script>
import infoContent from './info-content.vue'
export default {
  name: 'examSubject',
  components: {
    infoContent
  },
  props: ['examSubject', 'education'],
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
