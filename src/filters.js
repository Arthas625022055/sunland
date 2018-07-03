const moment = require('moment')

export function infoConfirmTime (val) {
  let today = new Date() * 1
  let showConfirmTime = today - 24 * 3600 * 1000 * 2
  let time = new Date(showConfirmTime)
  return time.toLocaleDateString().replace(/\//g, '.')
}

export function dateYMD (val) {
  return moment(val).format("YYYY-M-D").replace(/-/g,'.')
}

export function omit (val) {
  if (val.length >= 25) {
    let str = val.substring(0, 24) + '...'
    return str
  } else {
    return val
  }
}

