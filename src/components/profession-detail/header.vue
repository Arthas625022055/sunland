<template>
  <div class="profession-header">
    <img :src="professionData.professionImg" alt="">
    <div class="info">
      <div class="info-name">
        {{professionData.profession}} ({{professionData.professionCode}})
        <div class="info-education">
          {{professionData.education}}
        </div>
      </div>
      <div :class="['info-school', setClass()]" @click="gotoSchoolDetail(professionData, $event, 'ProfessionDetail', 'V1.0_professionDetail.school')">
        主考院校: {{professionData.mainSchool}}<img :src="schoolIco" alt="" v-if="hierarchy < 2">
      </div>
      <div class="info-time">
        信息已确认: {{ '' | infoConfirmTime}}
      </div>
    </div>
  </div>
</template>

<script>
import hotSchoolData from '../../../static/js/hot-school.json'
export default {
  name: 'professionHeader',
  components: {},
  props: ['professionData'],
  data () {
    return {
      msg: '',
      professionList: [],
      schoolList: [],
      hierarchy: '',
      schoolIco: require('../../../static/images/arrow_click.png')
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    this.professionList = hotSchoolData.professionList
    this.schoolList = hotSchoolData.schoolList
    this.hierarchy = sessionStorage.getItem('hierarchy') * 1
  },
  watch: {
  },
  methods: {
    gotoSchoolDetail(professionData, event, moduleName, elemName) {
      if (this.hierarchy < 2) {
        this.hierarchy += 1
        sessionStorage.setItem('hierarchy', this.hierarchy)
      } else {
        return false
      }
      let params = {}
      params.ele = event
      params.moduleName = moduleName
      params.elementName = elemName
      sl.ep(params)
      let urlStr = JSON.stringify(this.setParam(professionData))
      console.log(this.setParam(professionData))
      location.href = ('school-detail.html?param=' + urlStr).replace(/\%/g, '%25')
    },
    setClass () {
      if (this.hierarchy >= 2) {
        return 'disable'
      }
    },
    setParam (professionData) {
      let mainSchool = professionData.mainSchool
      let undergraduateProfessionList = []
      let juniorProfessionList = []
      let obj = {}
      this.professionList.forEach((item) => {
        if (item.mainSchool === mainSchool && item.education === '本科') {
          undergraduateProfessionList.push(item)
        } else if (item.mainSchool === mainSchool && item.education === '专科') {
          juniorProfessionList.push(item)
        }
      })
      this.schoolList.forEach((item) => {
        if (item.name === mainSchool) {
          obj = item
        }
      })
      obj.undergraduateProfessionList = undergraduateProfessionList
      obj.juniorProfessionList = juniorProfessionList
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
  .profession-header {
    padding: 0.36rem 0.2rem;
    display: flex;
    border-bottom: 0.2rem solid #F5F5F7;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    .info {
      margin-left: 0.24rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info-name {
        display: flex;
        align-items: center;
        font-size: 0.36rem;
        font-weight: 500;
        .info-education {
          color: #808080;
          border: 1px solid #808080;
          padding: 0 0.04rem;
          font-size: 0.24rem;
          transform: scale(0.8);
        }
      }
      .info-school {
        font-size: 0.28rem;
        color: #0093FF;
        img {
          width: 0.15rem;
          height: 0.24rem;
          vertical-align: middle;
          margin-left: 0.08rem;
        }
      }
      .disable {
        color: #666;
      }
      .info-time {
        font-size: 0.24rem;
        color: #808080;
      }
    }
  }
</style>
