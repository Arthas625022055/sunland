<template>
  <div class="content">
    <div class="nav">
      <!-- <div class="goback" @click="backtoindex"><img :src="goback" alt="">
      </div> -->
      <div class="relative" 
        :class="{school:index == 0,profession:index ==1}"
        @click="select(index, $event, 'HotSchool', 'V1.0_hotSchool.nav_' + (index + 1))"
        v-for="(item,index) in navtitle"
        :key="index">
        <span class="text" :class="{'active':item.sel == true}">
          {{item.text}}
        </span>
        <div class="blueborder" :class="{'blue':school && item.sel == true}">
        </div>
        <div class="blueborder" :class="{'blue':profession && item.sel == true}">
        </div>
      </div>
    </div>
    <!-- <div class="bottom-line"><div class="school" :class="{red:school}"></div><div class="profession" :class="{red:profession}"></div></div>-->
    <div class="school-section">
      <!-- <span class="warn-icon">
        <img :src="warnImg" alt="">
      </span> -->
      <span class="tips">
        {{tips}} 信息已确认: {{ | infoConfirmTime}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      msg: '',
      active: '',
      red: ''
    }
  },
  props:
  [
    'goback',
    'navtitle',
    'warnImg',
    'school',
    'profession'
  ],
  computed: {
    tips () {
      if (this.school) {
        return '以下为湖北省自考主考院校，'
      } else if (this.profession) {
        return '以下为湖北省自考可报考专业'
      }
    }
  },
  created () {},
  mounted () {},
  watch: {},
  methods: {
    backtoindex () {
      this.$emit('backtoindex')
    },
    select (index, event, moduleName, elemName) {
      let params = {}
      params.ele = event
      params.moduleName = moduleName
      params.elementName = elemName
      sl.ep(params)
      this.$emit('select', index)
    }
  }
}

</script>
<style lang="scss" scoped>
.content {
  padding-top: 0.97rem;
}
.nav {
  width: 100%;
  height: 0.97rem;
  background-color: #fff;
  display: flex;
  font-size: 0.32rem;
  color: rgba(34, 34, 34, 1);
  justify-content: center;
  line-height: 0.97rem;
  position: relative;
  border-bottom: 1px solid #F5F5F7;
  position: fixed;
  top: 0;
  z-index: 100;
  .goback {
    position: absolute;
    left: 0.0rem;
    width: 0.78rem;
    text-align: center;
    img {
      width: 0.16rem;
      height: 0.32rem;
      vertical-align: middle;
    }
  }
  .relative {
    position: relative;
    margin: 0 0.3rem;
    font-size: 0.32;
    .text {
      font-size: 0.32rem;
    }
    .school {
      margin-right: 0.3rem;
    }
    .blueborder {
      margin-right: 0.6rem;
      width: 1rem;
      height: 3px;
      background: transparent;
      position: absolute;
      bottom: 0px;
    }
    .profession {
      margin-left: 0.6rem;
      width: 0.5rem;
      height: 3px;
      background: transparent;
    }
    .blue {
      background-color: #0093FF;
      width: 1.34rem;
      height: 3px;
    }
    .profession {
      margin-left: 0.3rem;
    }
    span {
      padding-bottom: 6px;
    }
    .active {
      color: #0093FF;
      font-weight: 600;
    }
  }
}

.profession-section-white {
  height: 0.2rem;
  width: 100%;
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
