const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};

//proxy 1. 방화벽 기능 2. 웹 필터 기능 3. 캐쉬 데이터, 공유 데이터 제공 기능 / 다른 사람의 ip를 모르게 된다 2. 보내는 데이터도 임의로 바꿀 수 있다.
