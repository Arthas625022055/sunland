<template>
  <div class="feed-list">
    <div
      class="feed"
      v-for="(item, index) in feedList" :key="index"
      @click="gotoArticle(item, $event, 'Index', 'V1.0_index.feed_' + (index + 1))">
      <div class="type-one-img" v-if="!item.coverImgUrlThird">
        <div class="text-content">
          <div class="title">
            {{item.articleTitle | omit}}
          </div>
          <div class="info">
            <div class="info-type-from">
              <div class="info-type">
                {{item.topLevelCategory}}
              </div>
              <!-- <div class="info-from">
                {{item.from}}
              </div> -->
            </div>
            <!-- <div class="info-read">
              {{item.read}}阅读
            </div> -->
          </div>
        </div>
        <div class="img img-list">
          <img :src="item.coverImgUrlFirst" alt="">
        </div>
      </div>
      <div class="type-three-img" v-else>
        <div class="title title-top">
          {{item.articleTitle | omit}}
        </div>
        <div class="img">
          <img :src="item.coverImgUrlFirst" alt="">
          <img :src="item.coverImgUrlSecond" alt="">
          <img :src="item.coverImgUrlThird" alt="">
        </div>
        <div class="info">
          <div class="info-type-from">
            <div class="info-type">
              {{item.topLevelCategory}}
            </div>
            <!-- <div class="info-from">
              {{item.from}}
            </div> -->
          </div>
          <!-- <div class="info-read">
            {{item.read}}阅读
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['feedList'],
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
    gotoArticle (item, event, moduleName, elemName) {
      let params = {}
      params.ele = event
      params.moduleName = moduleName
      params.elementName = elemName
      sl.ep(params)
      location.href = 'article-detail.html?articleId=' + item.articleId
    }
  }
}
</script>

<style lang="scss" scoped>
  .feed-list {
    padding: 0 0.3rem;
    .feed {
      padding: 0.3rem 0;
      border-bottom: 1px solid #E2E2E2;
      .type-one-img {
        display: flex;
        justify-content: space-between;
        .text-content {
          flex: 7;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-height: 1.56rem;
          padding-right: 0.3rem;
        }
      }
    }
  }
  .img {
    display: flex;
    justify-content: space-between;
    img {
      width: 2.26rem;
      height: 1.56rem;
      border-radius: 0.08rem;
    }
  }
  .title {
    font-size: 0.32rem;
    line-height: 0.48rem;
    font-weight: 500;
    color: #222;
  }
  .title-top {
    margin-bottom: 0.24rem;
  }
  .info {
    width: 100%;
    display: flex;
    font-size: 0.24rem;
    color: #BBBBBB;
    margin-top: 0.24rem;
    justify-content: space-between;
    .info-type-from {
      display: flex;
      align-items: center;
      .info-type {
        border:1px solid #0093FF;
        color: #0093FF;
        margin-right: 0.24rem;
        padding: 0 0.04rem;
        transform: scale(0.9);
      }
    }
  }
</style>
