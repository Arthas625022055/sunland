import axios from '../common/http.js'

const questionAnswerApi = {
  getAnswerList: function (param) {
    return axios.get('http://192.168.0.87:7791/ehr-bachelor-comming/question-answer/get-question-answer-list.do',{params: param})
  },
  getAnswerDetail: function (param) {
    return axios.get('http://192.168.0.87:7791/ehr-bachelor-comming/question-answer/get-question-answer-list.do',{params: param})
  }
}

export default questionAnswerApi
