// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import subjectDetail from './subject-detail.vue'
import * as filters from '../../filters.js'
import '../../common/rem.js'

Vue.config.productionTip = false

Object.keys(filters).forEach(function (k) {
  Vue.filter(k, filters[k])
})
/* eslint-disable no-new */
new Vue({
  el: '#subject-detail',
  components: { subjectDetail },
  template: '<subject-detail/>'
})
