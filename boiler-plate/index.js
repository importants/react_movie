//벡엔드 시작점 --save 쓰면 package 에 저장됨 expressjs.com 14

const express = require("express"); // 모듈을 가지고 온다
const app = express(); // 앱을 만든다
const port = 5000; // 포트 생성

const mongoose = require(`mongoose`);
mongoose
  .connect(
    `mongodb+srv://ljh9716:gwi04182!@boilerplate.k3t6a.mongodb.net/boilerplate?retryWrites=true&w=majority`,
    // mongodb+srv://ljh9716:<password>@boilerplate.qhjz7.mongodb.net/<dbname>?retryWrites=true&w=majority -> password에 암호
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    } // 에러 안 뜨게 하는 법
  )
  .then(() => console.log(`MongoDB Contected`))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  // root 디렉토리에 오면 hello 출력하게함
  res.send("Hello World!");
});

app.listen(port, () => {
  // 5000번에서 실행하게 함
  console.log(`Example app listening at http://localhost:${port}`);
});
