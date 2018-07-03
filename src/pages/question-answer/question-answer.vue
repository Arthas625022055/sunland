<template>
  <div
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="0"
    :infinite-scroll-immediate-check = "false"
    id="question-answer">
    <test></test>
    <answer-list
      v-if="answerList.length"
      :answerList="answerList">
    </answer-list>
    <load-more
      :loading="loading"
      :isAllLoaded="isAllLoaded"
      :addText="addText">
    </load-more>
    <bottom-nav :currentPage="'questionAnswer'"></bottom-nav>
  </div>
</template>

<script>
import common from '../../common/common.js'
import test from '../../components/question-answer/test.vue'
import answerList from '../../components/question-answer/answer-list.vue'
import bottomNav from '../../components/bottom-nav/bottom-nav.vue'
import loadMore from '../../components/load-more/load-more.vue'
import questionAnswerApi from '../../api/question-answer'
export default {
  name: 'questionAnswer',
  components: {
    test,
    answerList,
    loadMore,
    bottomNav
  },
  data () {
    return {
      msg: '新项目',
      addText: '数据加载中……',
      pageRow: 1,
      pageNum: 10,
      loading: false,
      isAllLoaded: false,
      loadFail: false,
      answerList: []
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
    loading (val) {
      if (val) {
        this.getAnswerList()
      }
    }
  },
  methods: {
    getAnswerList () {
      let param = {}
      param.pageRow = this.pageRow
      param.pageNum = this.pageNum
      questionAnswerApi.getAnswerList(param).then((res) => {
        this.answerList = this.answerList.concat(res.data.data)
        if (res.data.data.length) {
          this.pageRow++
          this.loading = false
        } else {
          this.isAllLoaded = true
        }
      })
    },
    loadMore () {
      this.loading = true
    }
  }
}
</script>

<style>
#question-answer {
  width: 100%;
  height: 100%;
  background-color: #F5F5F7;
  overflow-y: scroll;
  padding-bottom: 0.88rem;
  overflow-scrolling : touch;
}
</style>
