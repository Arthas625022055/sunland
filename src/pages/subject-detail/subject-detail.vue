<template>
  <div id="subject-detail">
    <title-bar
      :currentPage="'SubjectDetail'"
      :title="'科目详情'">
    </title-bar>
    <!-- <subject-header
      v-if="subjectData"
      :subjectData="subjectData">
    </subject-header> -->
    <subject-info
      v-if="subjectData"
      :subjectData="subjectData">
    </subject-info>
  </div>
</template>

<script>
import titleBar from '../../components/title-bar/title-bar.vue'
import subjectHeader from '../../components/subject-detail/header.vue'
import subjectInfo from '../../components/subject-detail/subject-info.vue'
import subjectDetailData from '../../../static/js/subject-detail.json'
import common from '../../common/common.js'
export default {
  name: 'subjectDetail',
  components: {
    titleBar,
    subjectHeader,
    subjectInfo
  },
  data () {
    return {
      msg: '新项目',
      education: '',
      subjectNo: '',
      subjectData: null
    }
  },
  created () {
  },
  mounted () {
    this.education = common.getUrlparam(decodeURI(location.href)).education
    this.subjectNo = common.getUrlparam(decodeURI(location.href)).subjectNo
    this.getSubjectData()
  },
  methods: {
    getSubjectData () {
      let key = ''
      if (this.education === '本科') {
        key = 'undergraduate'
      } else if (this.education === '专科') {
        key = 'juniorCollege'
      }
      subjectDetailData[key].forEach((item) => {
        if (item.lessonCode * 1 === this.subjectNo * 1) {
          this.subjectData = item
        }
      })
    }
  }
}
</script>

<style>
  #subject-detail {
    width: 100%;
    min-height: 100%;
    background-color: #F5F5F7;
  }
</style>
