const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("Inside of React proxy middleware")
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://coding-textbook-server:3050",
      changeOrigin: true,
    })
  );
};