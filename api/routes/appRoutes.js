module.exports = (app) => {

  const siteControllers = require('../controllers/siteControllers')
  const apiControllers = require('../controllers/apiControllers')

  app.route('/')
    .get(siteControllers.index)

  app.route('/license')
    .get(siteControllers.license)

  app.route('/api/generate')
    .get(apiControllers.generate)

}
