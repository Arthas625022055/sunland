import axios from '../common/http.js'

const articleApi = {
  getArticleList: function (param) {
    return axios.get('http://140.143.7.67:5000/articleList',{params: param})
  },
  getArticle: function (param) {
    return axios.get('http://140.143.7.67:5000/article',{params: param})
  }
}

export default articleApi
