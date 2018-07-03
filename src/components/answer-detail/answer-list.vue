<template>
  <div class="answer-list">
    <div class="item" v-for="(item, index) in answerList" :key="index">
      <div class="user-info">
        <div class="head-img">
          
        </div>
        <div class="info">
          <div class="name">
            {{item.answerName}}
          </div>
          <div class="time">
            {{item.answerTime | dateYMD}}
          </div>
        </div>
      </div>
      <div class="content">
        {{item.answer}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['answerList'],
  data () {
    return {
      msg: ''
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
  .answer-list {
    padding: 0 0.3rem;
    background-color: #fff;
    .item {
      padding: 0.3rem 0;
      border-bottom: 0.02rem solid #E2E2E2;
      .user-info {
        display: flex;
        font-size: 0.28rem;
        align-items: center;
        .head-img{
          border-radius: 50%;
          width: 0.8rem;
          height: 0.8rem;
          background-color: #FDDCCA;
          margin-right: 0.16rem;
        }
        .name {
          font-size: 0.28rem;
          line-height: 0.34rem;
          color: #333;
        }
        .time {
          color: #999999;
          font-size: 0.24rem;
          line-height: 0.3rem;
          margin-top: 0.06rem;
        }
      }
      .content {
        margin-top: 0.2rem;
        font-size: 0.28rem;
        line-height: 0.4rem;
        color: #333;
      }
    }
  }
</style>
