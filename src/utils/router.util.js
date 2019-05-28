
const route = (path, method, controller, middlewares) => {
  return {
    method,
    path,
    middlewares,
    controller

  };
};

const parseRouter = (...routes) => {
  const router = require('express').Router();
  routes.map(route => {
    router[route.method.toLowerCase()](route.path, route.middlewares || [], route.controller)
  });
  return router;
};

module.exports = {parseRouter, route};
