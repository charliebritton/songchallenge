const debug = require('debug')('app:apiControllers')
const data = require('../data/data.json')

const generateData = (cb) => {

  let random = {
    key: data.musicalKeys[Math.floor(Math.random()*data.musicalKeys.length)],
    bpm: Math.floor(Math.random() * (200 - 40) + 40).toString(),
    instrument: data.instruments[Math.floor(Math.random()*data.instruments.length)],
    setting: data.settings[Math.floor(Math.random()*data.settings.length)],
    theme: data.themes[Math.floor(Math.random()*data.themes.length)]
  }

  cb(null, random)

}

exports.generate = generateData

const generate = (req, res) => {

  generateData((err, data) => {
    debug(`API request from: ${req.ip}`)
    debug(`Rate limit info: ${JSON.stringify(req.rateLimit)}`)
    debug(`Sending data: ${JSON.stringify(data)}`)
    res.json(data);

  })

}

exports.generate = generate

const generateSingle = (req, res) => {

  generateData((err, data) => {

    console.log(req.params.data)
    res.send(data[req.params.data]);

  });
}

exports.generateSingle = generateSingle
