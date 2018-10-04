const data = require('../data/data.json')

exports.generate = (req, res) => {

  let random = {
    key: data.musicalKeys[Math.floor(Math.random()*data.musicalKeys.length)],
    bpm: Math.floor(Math.random() * (200 - 40) + 40).toString(),
    instrument: data.instruments[Math.floor(Math.random()*data.instruments.length)],
    setting: data.settings[Math.floor(Math.random()*data.settings.length)],
    theme: data.themes[Math.floor(Math.random()*data.themes.length)]
  }

  res.send(JSON.stringify(random));

}
