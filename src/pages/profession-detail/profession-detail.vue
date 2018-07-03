<template>
  <div id="profession-detail" v-if="professionData">
    <title-bar
      :currentPage="'ProfessionDetail'"
      :title="'专业详情'">
    </title-bar>
    <profession-header
      :professionData="professionData">
    </profession-header>
    <profession-nav
      @selectOption="selectOption"
      :navList="navList">
    </profession-nav>
    <basic-info
      v-if="selectedNav === '基本信息'"
      :basicInfo="professionData.basicInfo">
    </basic-info>
    <exam-subject
      v-if="selectedNav === '考试科目'"
      :education="education"
      :examSubject="professionData.examSubject">
    </exam-subject>
    <from-info
      :fromInfo="professionData.fromInfo">
    </from-info>
  </div>
</template>

<script>
import professionHeader from '../../components/profession-detail/header.vue'
import titleBar from '../../components/title-bar/title-bar.vue'
import professionNav from '../../components/profession-detail/profession-nav.vue'
import basicInfo from '../../components/profession-detail/basic-info.vue'
import examSubject from '../../components/profession-detail/exam-subject.vue'
import fromInfo from '../../components/profession-detail/from-info.vue'
import professionDetailData from '../../../static/js/profession-detail.json'
import common from '../../common/common.js'
export default {
  name: 'professionDetail',
  components: {
    professionHeader,
    professionNav,
    basicInfo,
    examSubject,
    titleBar,
    fromInfo
  },
  data () {
    return {
      msg: '新项目',
      id: 0,
      profession: '',
      education: '',
      selectedNav: '基本信息',
      navList: [
        {
          name: '基本信息',
          isSelect: true
        },
        {
          name: '考试科目',
          isSelect: false
        }
      ],
      professionData: null
    }
  },
  created () {
    // this.professionData = professionDetailData[1]
    console.log(common.getUrlparam(location.href))
    this.profession = common.getUrlparam(decodeURI(location.href)).profession
    this.education = common.getUrlparam(decodeURI(location.href)).education
    this.getCurrentProfession(professionDetailData)
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    getCurrentProfession (professionDetailData) {
      console.log(this.profession,this.education)
      professionDetailData.forEach((item) => {
        if (item.profession === this.profession && item.education === this.education) {
          this.professionData = item
        }
      })
    },
    selectOption (index) {
      this.navList.forEach((item, idx) => {
        if (idx === index) {
          item.isSelect = true
          this.selectedNav = item.name
        } else {
          item.isSelect = false
        }
      })
    }
  }
}
</script>

<style>
</style>
