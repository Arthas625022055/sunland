const common = {
  getUrlparam: function (url) {
    let pramStr = url.split('.html?')[1]
    let pramList = pramStr.split('&')
    let pramObj = {}
    pramList.forEach((item) => {
      let key
      let val
      if (item.indexOf('http') < 0) {
        key = item.split('=')[0]
        val = item.split('=')[1]
      } else {
        key = item.split('=')[0]
        val = item.replace(key + '=', '')
      }
      if (!pramObj[key]) {
        pramObj[key] = val
      }
    })
    return pramObj
  },
  gotoOutLink: function (url) {
    let userAgent = navigator.userAgent
    if (userAgent.indexOf('benkelaile') >= 0) {
      // JSBridge.gotoNative("gotoBrowser", url)
      location.href = url
    } else {
      location.href = url
    }
  }
}

export default common
