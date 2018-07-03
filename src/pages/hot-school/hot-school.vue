<template>
  <div id="hot-school">
    <school-nav
      @backtoindex="backtoindex"
      @select="select"
      :tips="tips"
      :school="school"
      :profession="profession"
      :warnImg="warnImg"
      :maskImg="maskImg"
      :goback="goback"
      :infoConfirmTime="infoConfirmTime"
      :navtitle="navtitle">
    </school-nav>
    <tag-list-filter
      @selectedBySchoolTag="selectedBySchoolTag"
      @selectedByProfessionTag="selectedByProfessionTag"
      :school="school"
      :profession="profession"
      :tagList="tagList">
    </tag-list-filter>
    <school
      :selectedTag="selectedTag"
      :redBtn="redBtn"
      :schoolList="schoolList"
      :professionList="professionList"
      :school="school">
    </school>
    <profession
      :selectedTag="selectedTag"
      :redBtn="redBtn"
      :maskImg="maskImg"
      :profession="profession"
      :professionList="professionList">
    </profession>
    <bottom-nav :currentPage="'hotSchool'"></bottom-nav>
  </div>
</template>
<script>
import bottomNav from '../../components/bottom-nav/bottom-nav.vue'
import schoolNav from '../../components/hot-school/nav.vue'
import school from '../../components/hot-school/school.vue'
import profession from '../../components/hot-school/profession.vue'
import tagListFilter from '../../components/hot-school/tag-list-filter.vue'
import hotSchoolData from '../../../static/js/hot-school.json'
export default {
  name: 'hotSchool',
  components: {
    schoolNav,
    school,
    profession,
    tagListFilter,
    bottomNav
  },
  data () {
    return {
      msg: '',
      school: false,
      profession: true,
      tagList: null,
      selectedTag: [],
      warnImg: require('../../../static/images/school_prompt.png'),
      goback: require('../../../static/images/major_return.png'),
      maskImg: require('../../../static/images/major_lead.png'),
      selectTagList: [],
      infoConfirmTime: '',
      schoolList: undefined,
      professionList: undefined,
      redBtn: undefined,
      navtitle: undefined,
      tips: undefined
    }
  },
  computed: {
  },
  created () {
    this.schoolList = hotSchoolData.schoolList
    this.professionList = hotSchoolData.professionList
    this.redBtn = hotSchoolData.redBtn
    this.navtitle = hotSchoolData.navtitle
    this.tips = hotSchoolData.tips
    this.infoConfirmTime = hotSchoolData.infoConfirmTime
    this.setDefaultShow()
    this.setTagList()
  },
  mounted () {},
  watch: {
    tagList (val) {
      this.setSelectedTag()
    }
  },
  methods: {
    gotoTest () {},
    backtoindex () {
      location.href = 'index.html'
    },
    setSelectedTag () {
      this.selectedTag = []
      this.tagList.forEach((item) => {
        if (item.sel === true) {
          this.selectedTag.push(item.text)
        }
      })
    },
    selectedBySchoolTag (tag) {
      this.tagList.forEach((item, index)=> {
        if (item.text === tag.text) {
          item.sel = !item.sel
          this.tagList.splice(index, 1, item)
        }
      })
    },
    selectedByProfessionTag (tag) {
      this.tagList.forEach((item, index)=> {
        if (item.text === tag.text) {
          item.sel = !item.sel
          this.tagList.splice(index, 1, item)
        } else {
          if ((tag.text === '本科专业' && item.text === '专科专业') ||
            (tag.text === '专科专业' && item.text === '本科专业')) {
            item.sel = false
            this.tagList.splice(index, 1, item)
          }
        }
      })
    },
    setTagList () {
      if (this.profession) {
        this.tagList = hotSchoolData.selectTypeByProfess
      } else if (this.school) {
        this.tagList = hotSchoolData.selectTypeBySchool
      }
    },
    setDefaultShow () {
      sessionStorage.setItem('hierarchy', 0)
      let bar = sessionStorage.getItem('currentBar')
      if (bar) {
        this.navtitle.forEach((val, i) => {
          if (val.text === bar) {
            val.sel = true
          } else {
            val.sel = false
          }
        })
        if (bar === '主考院校') {
          this.school = true
          this.profession = false
        } else if (bar === '可选专业') {
          this.school = false
          this.profession = true
        }
      }
    },
    select (index) {
      var that = this
      that.navtitle.forEach((val, i) => {
        if (index === i) {
          val.sel = true
          sessionStorage.setItem('currentBar', val.text)
          if (val.text === '主考院校') {
            that.school = true
            that.profession = false
          } else if (val.text === '可选专业') {
            that.school = false
            that.profession = true
          }
        } else {
          val.sel = false
        }
      })
      this.setTagList()
    }
  }
}

</script>
<style>
</style>
