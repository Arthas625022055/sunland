<template>
  <div class="index-header">
    <img :src="headerImg" alt="">
    <div class="text-content">
      <div class="position">
        <img :src="positionIco" alt="">
        <div v-if="mapPosition">
          {{mapPosition}}
        </div>
        <div v-else>
          获取中...
        </div>
      </div>
      <div class="main-content">
        <div class="remain-day">
          <span class="day-number">{{remainDay}}</span><span class="unit"> 天</span>
        </div>
        <div class="name">
          {{header.name}}
        </div>
        <div class="tip">
          <img :src="tipIco" alt="">
          <div class="tip-content">
            {{header.tip}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexHeader',
  components: {},
  props: ['mapPosition', 'remainDay', 'header'],
  data () {
    return {
      msg: '',
      positionIco: require('../../../static/images/home_locading.png'),
      tipIco: require('../../../static/images/major_lead.png'),
      headerImg: require('../../../static/images/home_background.png')
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
  .index-header {
    position: relative;
    img {
      vertical-align: top;
      width: 100%;
    }
    .text-content {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      .position {
        position: absolute;
        top: 0.5rem;
        right: 0.3rem;
        display: flex;
        font-size: 0.24rem;
        padding: 0.12rem 0.18rem;
        background-color: #000;
        border-radius: 0.4rem;
        color: #fff;
        align-items: center;
        img {
          width: 0.18rem;
          height: 0.22rem;
          color: #fff;
          margin-right: 0.08rem;
        }
      }
      .main-content {
        color: #fff;
        font-weight: 300;
        padding-left: 0.3rem;
        padding-top: 0.1rem;
        .remain-day {
          .day-number {
            font-size: 0.72rem;
            font-family: pictos;
            font-weight: 400;
          }
          .unit {
            font-size: 0.28rem;
          }
        }
        .name {
          font-size: 0.28rem;
        }
        .tip {
          display: flex;
          font-size: 0.24rem;
          margin-top: 0.34rem;
          img {
            width: 0.18rem;
            height: 0.14rem;
            position: relative;
            top: 0.09rem;
            margin-right: 0.14rem;
          }
        }
      }
    }
  }
</style>
