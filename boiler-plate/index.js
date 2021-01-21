//벡엔드 시작점 --save 쓰면 package 에 저장됨 expressjs.com 14

const express = require("express"); // 모듈을 가지고 온다
const app = express(); // 앱을 만든다
const port = 5000; // 포트 생성

app.get("/", (req, res) => {
  // root 디렉토리에 오면 hello 출력하게함
  res.send("Hello World!");
});

app.listen(port, () => {
  // 5000번에서 실행하게 함
  console.log(`Example app listening at http://localhost:${port}`);
});
