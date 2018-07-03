<template>
  <div id="answer-detail">
    <title-bar
      v-if="isScrollTop"
      :currentPage="'answerDetail'"
      :title="'问答详情'">
    </title-bar>
    <answer-header
      :count="count"
      :question="question">
    </answer-header>
    <answer-list
      v-if="answerList.length"
      :answerList="answerList">
    </answer-list>
  </div>
</template>
<script>
import common from '../../common/common.js'
import questionAnswerApi from '../../api/question-answer'
import titleBar from '../../components/title-bar/title-bar.vue'
import answerHeader from '../../components/answer-detail/answer-header.vue'
import answerList from '../../components/answer-detail/answer-list.vue'
export default {
  name: 'answerDetail',
  components: {
    titleBar,
    answerHeader,
    answerList
  },
  data() {
    return {
      msg: '新项目',
      count: 1,
      question: '',
      questionId: null,
      isScrollTop: true,
      scrollTopVal: '',
      pageRow: 1,
      pageNum: 10,
      answerList: []
    }
  },
  created() {},
  mounted() {
    this.questionId = common.getUrlparam(decodeURI(location.href)).questionId * 1
    this.getAnswerDetil()
    this.bindScrollEvent()
  },
  watch: {
  },
  methods: {
    getAnswerDetil () {
      let param = {}
      param.questionId = this.questionId
      param.pageRow = this.pageRow
      param.pageNum = this.pageNum
      questionAnswerApi.getAnswerDetail(param).then((res) => {
        this.question = res.data.data.result[0].question
        this.count = res.data.data.count
        this.answerList = this.answerList.concat(res.data.data.result)
      })
    },
    bindScrollEvent () {
      let _this = this
      let div = document.getElementById('answer-detail')
      div.onscroll = function () {
        _this.scrollTopVal = div.scrollTop
      }
    }
  }
}

</script>
<style>
  #answer-detail {
    width: 100%;
    height: 100%;
    background-color: #F5F5F7;
    overflow-y: scroll;
    padding-bottom: 0.88rem;
    overflow-scrolling : touch;
  }
</style>
