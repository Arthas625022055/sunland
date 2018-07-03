<template>
  <div id="feedback">
    <div class="header">
      反馈交流
    </div>
    <div class="main">
      <div class="main-content">
        <div class="head-img">
          <img :src="logo" alt="">
        </div>
        <div class="bottom-line">
          <div class="sub-title">
            意见反馈 &bull; 学习交流
          </div>
        </div>
        <div class="tip">
          <div>对我们的意见反馈 / 找个伙伴一起考试</div>
          <div>互相监督打卡学习 / 自考问题讨论交流</div>
        </div>
        <div class="wechat">
          <div class="title">
            直接加学长微信进群
          </div>
          <div class="wechat-num" @click="clipboard()">
            点击复制加微信：<span class="wechat-num-txt">1234567</span>
          </div>
        </div>
        <div class="qr-code">
          <div class="title">
            或扫描以下二维码进群
          </div>
          <div class="tip">
            （截图~~微信扫一扫）
          </div>
          <div class="code-img">
            <img :src="qrCode" alt="">
          </div>
        </div>
      </div>
    </div>
    <bottom-nav :currentPage="'feedback'"></bottom-nav>
  </div>
</template>

<script>
/* eslint-disable */
import { MessageBox } from 'mint-ui'
import titleBar from '../../components/title-bar/title-bar.vue'
import Clipboard from 'clipboard'
import bottomNav from '../../components/bottom-nav/bottom-nav.vue'
import indexData from '../../../static/js/index.json'
import articleApi from '../../api/article'
export default {
  name: 'index',
  components: {
    titleBar,
    bottomNav
  },
  data () {
    return {
      msg: '新项目',
      qrCode: require('../../../static/images/qr-code.png'),
      logo: require('../../../static/images/logo.png')
    }
  },
  mounted () {
  },
  methods: {
    clipboard () { // 原生js复制到剪贴板
      let that = this
      let obj = new Clipboard('.wechat-num-txt', {
        text: function (e) {
          var text = e.innerText
          MessageBox.alert(text + '已复制到剪贴板').then(action => {
            location.href="weixin://"
          })
          return text
        }
      })
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>
  #feedback {
    width:100%;
    min-height: 100%;
    background-color: #719DEA;
    .header {
      background-color: #fff;
      width: 100%;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      font-size: 0.4rem;
      font-weight: 500;
    }
    .main {
      padding: 1.06rem 0.4rem;
      padding-bottom: 1.48rem;
      text-align: center;
      .main-content {
        background-color: #fff;
        font-size: 0.36rem;
        font-weight: 500;
        padding-top: 1.36rem;
        padding-bottom: 0.74rem;
        border-radius: 0.2rem;
        position: relative;
        .head-img {
          width: 1.4rem;
          height: 1.4rem;
          position: absolute;
          border-radius: 50%;
          left: 50%;
          margin-left: -0.7rem;
          top: -0.7rem;
          padding: 0;
          img {
            width: 100%;
          }
        }
      }
      .bottom-line {
        width: 4.4rem;
        height: 0.2rem;
        background-color: #EEF6FC;
        margin: 0 auto;
        margin-bottom: 0.4rem;
        .sub-title {
          position: relative;
          top: -0.31rem;
        }
      }
      .tip {
        font-size: 0.24rem;
        line-height: 0.34rem;
        color: #666666;
        margin-bottom: 0.8rem;
      }
      .wechat {
        background-color: #EEF6FC;
        width: 6.1rem;
        margin: 0 auto;
        border-radius: 0.12rem;
        font-size: 0.28rem;
        line-height: 0.28rem;
        font-weight: 500;
        padding: 0.32rem 0;
        .title {
          color: #333333;
          margin-bottom: 0.2rem;
        }
        .wechat-num {
          color: #0093FF;
        }
      }
      .qr-code {
        margin-top: 0.6rem;
        font-size: 0.28rem;
        line-height: 0.28rem;
        .title {
          font-weight: 500;
          color: #333;
          margin-bottom: 0.2rem;
        }
        .tip {
          color: #666666;
          margin-bottom: 0.3rem;
        }
        .code-img{
          width: 2.2rem;
          height: 2.2rem;
          margin: 0 auto;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
