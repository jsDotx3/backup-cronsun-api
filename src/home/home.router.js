const routeUtil = require(`utils/router.util`)
const controller = require('./home.controller')
const routes = routeUtil.parseRouter(
  routeUtil.route('/', 'get', controller.index),
)

module.exports = routes
