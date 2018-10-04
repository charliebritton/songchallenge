const path = require('path')

exports.index = (req, res) => {
  return res.sendFile(path.resolve('./public/home.html'));
}

exports.license = (req, res) => {
  return res.sendFile(path.resolve('./public/license.html'))
}
