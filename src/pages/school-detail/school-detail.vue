<template>
  <div id="school-detail">
    <title-bar
      :currentPage="'SchoolDetail'"
      :title="'院校详情'">
    </title-bar>
    <school-header
      :schoolData="schoolData">
    </school-header>
    <info-content
      :title="'院校信息'"
      :contentUrl="schoolData.schoolIntro.url"
      :content="schoolData.schoolIntro.content"
      :type="'string'">
    </info-content>
    <info-content
      :title="'继续教育学院信息'"
      :contentUrl="schoolData.continuingEducation.url"
      :content="resetEducationInfo(schoolData.continuingEducation)"
      :isHideNo="true"
      :type="'list'">
    </info-content>
    <info-content
      :professionList="schoolData.undergraduateProfessionList"
      :title="'主考本科专业（' + schoolData.undergraduateProfession.length + '）'">
    </info-content>
    <info-content
      :professionList="schoolData.juniorProfessionList"
      :title="'主考专科专业（' + schoolData.juniorProfession.length + '）'">
    </info-content>
    <botttom-info></botttom-info>
  </div>
</template>

<script>
import schoolHeader from '../../components/school-detail/header.vue'
import titleBar from '../../components/title-bar/title-bar.vue'
import botttomInfo from '../../components/school-detail/bottom-info.vue'
import infoContent from '../../components/profession-detail/info-content.vue'
import professionDetailData from '../../../static/js/profession-detail.json'
import common from '../../common/common.js'
export default {
  name: 'schoolDetail',
  components: {
    schoolHeader,
    infoContent,
    titleBar,
    botttomInfo
  },
  data () {
    return {
      msg: '新项目',
      schoolData: {
        'icon': './static/images/school_1.png',
        'name': '武汉大学',
        'tag': '985',
        'tagImg': './static/images/school_985.png',
        'examForUndergraduate': '本科',
        'profession': ['网络工程', '行政管理', '英语', '法学', '广告学'],
        'undergraduateProfession': ['网络工程', '行政管理', '英语'],
        'juniorProfession': ['网络工程', '英语'],
        'schoolIntro': {
          'url': 'http://www.baidu.com',
          'content': '这里是院校介绍'
        },
        'continuingEducation': {
          'url': 'http://www.baidu.com',
          'tel': '027',
          'adress': '地址',
          'content': '这里是继续教育学院介绍介绍'
        },
        'juniorProfessionList': [
          {
            'icon': './static/images/major_1.png',
            'name': '英语',
            'desc': '武汉大学',
            'education': '专科',
            'mainSchool': '武汉大学',
            'tagList': ['教师','实用性强','需求大'],
            'noMathExam': 1,
            'noEnglishExam': 0,
            'count': '8.9'
          },
          {
            'icon': './static/images/major_1.png',
            'name': '行政管理',
            'desc': '武汉大学',
            'education': '专科',
            'mainSchool': '武汉大学',
            'tagList': ['公务员','难度低','方向广'],
            'noMathExam': 0,
            'noEnglishExam': 1,
            'count': '8.9'
          }
        ],
        'undergraduateProfessionList': [
          {
            'icon': './static/images/major_1.png',
            'name': '法学',
            'desc': '武汉大学',
            'education': '本科',
            'mainSchool': '武汉大学',
            'tagList': ['公务员/文员','薪资高'],
            'noMathExam': 1,
            'noEnglishExam': 0,
            'count': '8.9'
          },
          {
            'icon': './static/images/major_1.png',
            'name': '英语',
            'desc': '武汉大学',
            'education': '本科',
            'mainSchool': '武汉大学',
            'tagList': ['需求大','就业范围广','实用性强'],
            'noMathExam': 1,
            'noEnglishExam': 0,
            'count': '8.9'
          },
          {
            'icon': './static/images/major_1.png',
            'name': '广告学',
            'desc': '武汉大学',
            'education': '本科',
            'mainSchool': '武汉大学',
            'tagList': ['网络推广','难度低','需求大'],
            'noMathExam': 1,
            'noEnglishExam': 0,
            'count': '8.9'
          }
        ]
      }
    }
  },
  created () {
  },
  mounted () {
    this.schoolData = JSON.parse(common.getUrlparam(decodeURI(location.href)).param)
  },
  methods: {
    resetEducationInfo (continuingEducation) {
      let arr = []
      arr.push('电话：' + continuingEducation.tel)
      arr.push('地址：' + continuingEducation.adress)
      return arr
    }
  }
}
</script>

<style>
</style>
