<template>
  <div class="">
    <div class="item" v-for="(item, index) in answerList" :key="index" @click="gotoDetail(item)">
      <div class="title">
        {{item.question}}
      </div>
      <div class="content">
        <img v-if="item.isMoreUseful" :src="''" alt="">{{item.answer}}
      </div>
      <div class="tip">
        <div class="time">
          {{item.answerTime | dateYMD}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: ['answerList'],
  data() {
    return {
      msg: ''
    }
  },
  computed: {},
  created() {},
  mounted() {
  },
  watch: {},
  methods: {
    gotoDetail (item) {
      location.href = './answer-detail.html?questionId=' + item.questionId
    }
  }
}

</script>
<style lang='scss' scoped>
  .item {
    background-color: #fff;
    font-size: 0.32rem;
    padding: 0.2rem 0.3rem;
    margin-top: 0.2rem;
    .title {
      font-size: 0.32rem;
      line-height: 0.4rem;
      font-weight: 500;
    }
    .content {
      position:relative;
      font-size: 0.28rem;
      line-height: 0.4rem;
      color: #666666;
      font-weight: 300;
      margin-top: 0.2rem;
      height: 1.2rem;
      overflow: hidden;
    }
    .tip {
      .time {
        font-size: 0.24rem;
        line-height: 0.3rem;
        color: #666666;
        font-weight: 300;
        text-align: right;
        margin-top: 0.2rem;
      }
    }
  }
  .content::after {
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding:0 0.2rem 0.02rem 0.9rem;
    background:url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png) repeat-y;
  }
</style>
