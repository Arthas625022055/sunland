<template>
  <div class="profession-header">
    <img :src="schoolData.icon" alt="">
    <div class="info">
      <div class="info-name">
        {{schoolData.name}} 
        <div class="tagImg" v-if="schoolData.tagImg">
          <img :src="schoolData.tagImg" alt="">
        </div>
      </div>
      <div class="total-tags" >
        主考本科专业<span v-if="schoolData.undergraduateProfession">{{schoolData.undergraduateProfession.length}}</span>个，专科专业<span v-if="schoolData.juniorProfession">{{schoolData.juniorProfession.length}}</span>个
      </div>
      <div class="info-time">
        信息已确认: {{ | infoConfirmTime}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'professionHeader',
  components: {},
  props: ['schoolData'],
  data () {
    return {
      msg: '',
      schoolIco: require('../../../static/images/arrow_click.png'),
      a: {
        'icon': './static/images/school_1.png',
        'name': '武汉大学',
        'tag': '985',
        'examForUndergraduate': '本科',
        'profession': ['网络工程', '行政管理', '英语', '法学', '广告学'],
        'undergraduateProfession': ['网络工程', '行政管理', '英语'],
        'juniorProfession': ['网络工程', '英语'],
        'schoolIntro': {
          'url': 'http://....',
          'content': '这里是院校介绍'
        },
        'continuingEducation': {
          'url': 'http://....',
          'tel': '027',
          'adress': '地址',
          'content': '这里是继续教育学院介绍介绍'
        },
        'tagImg': './static/images/school_985.png'
      }
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
        .tagImg {
          width: 0.56rem;
          height: 0.3rem;
          margin-right: 0.18rem;
          img {
            width: 0.56rem;
            height: 0.3rem;
            vertical-align: top;
          }
        }
        .info-education {
          color: #808080;
          border: 1px solid #808080;
          padding: 0 0.04rem;
          font-size: 0.24rem;
          transform: scale(0.8);
        }
      }
      .total-tags {
        font-size: 0.24rem;
        color: #666666;
        line-height: 0.25rem;
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
      .info-time {
        font-size: 0.24rem;
        color: #999999;
      }
    }
  }
</style>
