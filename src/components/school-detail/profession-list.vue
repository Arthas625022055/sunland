<template>
  <div class="profession-list">
    <div class="profession" 
      :style="{border: (index === professionList.length - 1 ? 'none' : '')}" 
      v-for="(profession, index) in professionList" :key="index" @click="gotoProfession(profession, $event, 'SchoolDetail', 'V1.0_schoolDetail.profession_' + (index + 1))">
      <div class="profession-img">
        <img :src="profession.icon" alt="">
      </div>
      <div class="profession-info">
        <div class="name">
          {{profession.name}}
        </div>
        <div class="tag-list">
          <div class="tag" v-for="(tag, index) in profession.tagList" :key="index">
            {{tag}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['professionList'],
  data () {
    return {
      msg: '',
      hierarchy: ''
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    this.hierarchy = sessionStorage.getItem('hierarchy') * 1
  },
  watch: {
  },
  methods: {
    gotoProfession (item, event, moduleName, elemName) {
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
      location.href = 'profession-detail.html?profession=' + item.name + '&education=' + item.education
    }
  }
}
</script>

<style lang="scss" scoped>
.profession-list {
  padding: 0 0.3rem;
  .profession {
    padding: 0.3rem 0;
    display: flex;
    border-bottom: 1px solid #E2E2E2;
    .profession-img {
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 0.3rem;
      img {
        width: 100%;
      }
    }
    .profession-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-size: 0.32rem;
        font-weight: 500;
        margin-bottom: 0.26rem;
      }
      .tag-list {
        display: flex;
        .tag {
          font-size: 0.24rem;
          font-weight: 300;
          padding: 0.06rem 0.1rem;
          background-color: #F5F5F7;
          color: #666;
          transform: scale(0.95);
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>
