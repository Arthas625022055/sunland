<template>
  <div class="">
    <div class="school-list" v-if="school">
      <div class="list-box" @click="neng(item, $event,'HotSchool','V1.0_hotschool.school_'+ (index + 1))" v-for="(item,index) in schoolList" :key="index" v-show="isItemSelected(item)">
        <div class="school-icon">
          <img :src="item.icon" alt="">
        </div>
        <div class="school-info">
          <!-- 通过 tagImg 显示标签  开始 -->
          <div class="name">
            <span class="schoolName">{{item.name}}</span>
            <div v-if="item.tagImg" class="tagImg">
              <img :src="item.tagImg" alt="">
            </div>
          </div>
          <!-- 通过 tagImg 显示标签  结束 -->
          <!-- <div class="tags" ref="ele">
            <span v-if="idx < 2" v-for="(tag,idx) in item.profession" :key="idx">
              {{tag}}
            </span>
          </div> -->
          <div class="total-tags" >
            主考本科专业<span v-if="item.undergraduateProfession">{{item.undergraduateProfession.length}}</span>个，专科专业<span v-if="item.juniorProfession">{{item.juniorProfession.length}}</span>个
          </div>
        </div>
        <!-- <div class="btn-zx">
          <img :src="redBtn" alt="">
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: ['school', 'schoolList', 'redBtn', 'selectedTag', 'professionList'],
  data () {
    return {
      msg: '',
      hierarchy: ''
    }
  },
  computed: {},
  created () {},
  mounted () {
    console.log(this.schoolList)
    this.hierarchy = sessionStorage.getItem('hierarchy') * 1
  },
  watch: {
  },
  methods: {
    neng (item, event, moduleName, elemName) {
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
      let urlStr = JSON.stringify(this.setParam(item))
      location.href = ('school-detail.html?param=' + urlStr).replace(/\%/g, '%25')
    },
    setParam (school) {
      let mainSchool = school.name
      let undergraduateProfessionList = []
      let juniorProfessionList = []
      this.professionList.forEach((item) => {
        if (item.mainSchool === mainSchool && item.education === '本科') {
          undergraduateProfessionList.push(item)
        } else if (item.mainSchool === mainSchool && item.education === '专科') {
          juniorProfessionList.push(item)
        }
      })
      let obj = school
      obj.undergraduateProfessionList = undergraduateProfessionList
      obj.juniorProfessionList = juniorProfessionList
      return obj
    },
    isItemSelected (item) {
      if (((item.juniorProfession.length > 0 &&
        this.selectedTag.indexOf('主考专科') === 0 &&
        this.selectedTag.length === 1) ||
        (item.undergraduateProfession.length > 0 &&
        this.selectedTag.indexOf('主考本科') === 0) &&
        this.selectedTag.length === 1) ||
        (item.juniorProfession.length > 0 &&
        item.undergraduateProfession.length > 0 &&
        this.selectedTag.length === 2)) {
        return true
      } else if (this.selectedTag.length === 0) {
        return true
      }
    }
  }
}

</script>
<style lang="scss" scoped>
img {
  vertical-align: top;
}
.school-list {
  padding: 0 0.3rem;
  padding-bottom: 1rem;
  box-sizing: border-box; // border-bottom: 0.7rem solid  #F5F5F7;
  .list-box {
    display: flex;
    position: relative;
    border-bottom: 1px solid #E2E2E2;
    margin-top: 0.3rem;
    padding-bottom: 0.3rem;
    .school-icon {
      width: 1.5rem;
      height: 1.5rem; // border: 1px solid rgba(221,221,221,1);
      box-sizing: border-box;
      border-radius: 6px;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .school-info {
      text-align: left;
      margin-left: 0.3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-size: 0.32rem;
        font-weight: 600;
        color: #333;
        display: flex;
        margin-bottom: 0.2rem;
        .name-tag {
          font-size: 0.22rem;
          color: rgba(255, 255, 255, 1);
          background-color: #fff;
          border-radius: 3px;
          height: 0.3rem;
          line-height: 0.3rem;
          padding: 1px 2px;
        }
        .tagImg {
          width: 0.56rem;
          height: 0.3rem;
          margin-right: 0.18rem;
          img {
            width: 0.56rem;
            height: 0.3rem;
            margin-top: 0.1rem;
          }
        }
        .orange {
          background: rgba(255, 139, 92, 1);
        }
        .yellow {
          background: rgba(246, 190, 91, 1)
        }
        .blue {
          background: rgba(117, 177, 248, 1);
        }
        .schoolName {
          font-size: 0.32rem;
          color: rgba(34, 34, 34, 1);
          margin-right: 0.1rem;
        }
      }
      .tags {
        width: 5rem;
        display: flex;
        span {
          border: 1px solid rgba(147, 147, 147, 1);
          font-size: 0.22rem;
          color: rgba(102, 102, 102, 1);
          border-radius: 2px;
          padding: 1px 4px;
        }
      }
      .tags-desc {
        span {
          border: none;
          font-size: 0.24rem;
          color: rgba(0, 132, 137, 1);
          .maskImg {
            width: 0.16rem;
            height: 0.13rem;
            vertical-align: middle;
            margin-top: -0.05rem;
            margin-right: 0.14rem;
          }
        }
      }
      .total-tags {
        font-size: 0.24rem;
        color: rgba(153, 153, 153, 1);
        line-height: 0.25rem;
      }
    }
    .btn-zx {
      position: absolute;
      bottom: 0.3rem;
      right: 0;
      width: 1.6rem;
      height: 0.56rem;
      img {
        width: 1.6rem;
        height: 0.56rem;
      }
    }
  }
  .list-box:nth-last-child(1) {
    border-bottom: none;
  }
}
.school-section {
  padding: 0.29rem 0.38rem 0.30rem 0.30rem;
  background-color: #F5F5F7;
  .warn-icon {
    float: left;
    display: inline-block;
    width: 0.24rem;
    height: 0.24rem;
    color: rgba(102, 102, 102, 1);
    margin-right: 0.1rem;
    img {
      width: 0.24rem;
      height: 0.24rem;
      vertical-align: top;
      position: relative;
      top: 0.06rem;
    }
  }
  .tips {
    overflow: hidden;
    display: block;
    color: #666;
    text-align: left;
    font-size: 0.24rem;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
