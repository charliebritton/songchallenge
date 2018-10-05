const debug = require('debug')('app:siteControllers')
const path = require('path')

exports.index = (req, res) => {
  debug('Site index requested, sending home.html')
  return res.sendFile(path.resolve('./public/home.html'));
}

exports.license = (req, res) => {
  debug('license requested, sending LICENSE')
  return res.sendFile(path.resolve('./LICENSE'))
}
