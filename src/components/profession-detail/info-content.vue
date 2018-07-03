<template>
  <div class="content">
    <sub-title 
      :requireScore="requireScore"
      :title="title">
    </sub-title>
    <profession-list
      v-if="professionList"
      :professionList="professionList">
    </profession-list>
    <div class="content-detail" v-if="content">
      <div class="url-content" v-if="contentUrl">
        <span @click="gotoLink(contentUrl)">{{contentUrl}}</span>
      </div>
      <div class="content-text" v-if="type === 'string'">
        {{content}}
      </div>
      <div class="content-list" v-if="type === 'list'">
        <div v-for="(item, index) in content" :key="index">
          <span v-if="!isHideNo && content.length > 1">{{index + 1}}.</span><span v-html="item"></span>
        </div>
      </div>
      <div class="content-card-list" v-if="type === 'cardList'">
        <div v-for="(item, index) in content" :key="index" class="card">
          {{item}}
        </div>
      </div>
      <div class="content-table" v-if="type === 'table'">
        <div class="table-row grey-row">
          <div class="name title" @click="gotoDetail(item)">
            科目
          </div>
          <div class="score title">
            学分
          </div>
          <div class="type title">
            备注
          </div>
        </div>
        <div
          v-if="item.subjectNo"
          v-for="(item, index) in content"
          :key="index"
          :class="['table-row', setBgColor(index)]">
          <div class="name" @click="gotoDetail(item)">
            {{item.subjectNo}} {{item.subjectName}}
          </div>
          <div class="score">
            {{item.score}}
          </div>
          <div class="type">
            {{item.examType}}
          </div>
        </div>
        <div v-if="!item.subjectNo" v-for="(item, index) in content" class="table-text">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subTitle from './sub-title.vue'
import professionList from '../school-detail/profession-list.vue'
import common from '../../common/common.js'
export default {
  name: '',
  components: {
    subTitle,
    professionList
  },
  props: ['title', 'content', 'type', 'requireScore', 'contentUrl', 'isHideNo', 'professionList', 'education'],
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
    gotoLink (contentUrl) {
      common.gotoOutLink(contentUrl)
    },
    gotoDetail (item) {
      location.href = 'subject-detail.html?education=' + this.education + '&subjectNo=' + item.subjectNo
    },
    setBgColor (index) {
      if (index % 2) {
        return 'grey-row'
      } else {
        return 'white-row'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  border-bottom: 0.2rem solid #F5F5F7;
  .content-detail {
    .url-content {
      margin-bottom: 0.2rem;
      span {
        color: #0093FF;
      }
    }
    font-size: 0.28rem;
    font-weight: 300;
    line-height: 0.4rem;
    color: #808080;
    .url-content, .content-text, .content-list, .content-card-list {
      padding: 0.3rem 0.24rem;
    }
  }
  .content-table {
    .table-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.24rem;
      line-height: 0.8rem;
      .name {
        flex: 5;
        color: #0093FF;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        padding-left: 0.24rem;
      }
      .title {
        color: #333333;
        font-weight: 500;
      }
      .score {
        flex: 2.2;
        text-align: center;
        border-left: 0.02rem solid #E2E2E2;
        border-right: 0.02rem solid #E2E2E2;
      }
      .type {
        flex: 2.8;
        text-align: center;
      }
    }
    .grey-row {
      background-color: #F5F5F5;
    }
    .white-row {
      background-color: #fff;
    }
  }
  .content-card-list {
    display: flex;
    flex-wrap: wrap;
    .card {
      padding: 0.1rem 0.2rem;
      color: #0093FF;
      background-color: #F2F9FF;
      font-size: 0.28rem;
      line-height: 0.4rem;
      border-radius: 0.3rem;
      margin-right: 0.2rem;
      font-weight: 400;
    }
  }
}
</style>
