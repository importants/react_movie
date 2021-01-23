//벡엔드 시작점 --save 쓰면 package 에 저장됨 expressjs.com 14

const express = require("express"); // 모듈을 가지고 온다
const app = express(); // 앱을 만든다
const port = 5000; // 포트 생성
const bodyParser = require(`body-parser`);
const config = require(`./config/key`);

const { User } = require("./models/User");

//appication/x-www-form-urlencoded 데이터를 가져오는 것
app.use(bodyParser.urlencoded({ extended: true }));

//appication/json 데이터 가져오는 것
app.use(bodyParser.json());

const mongoose = require(`mongoose`);
mongoose
  .connect(
    ``,
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
  // root 디렉토리에 오면 hello 출력하게함 -> 라우터
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  //회원 가입 할떄 필요한 정보들을  client에서 가져오면
  //그것들을  데이터 베이스에 넣어준다.
  //   {
  //     "name":"lle",
  //     "email":"ljh9716@naver.com",
  //     "password":"1234"
  // }
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  // 5000번에서 실행하게 함
  console.log(`Example app listening at http://localhost:${port}`);
});

//yarn add body-parser --save
//postman 설치
// node mon == pm2 ->yarn add nodemon --save-dev
