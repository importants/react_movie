const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);
const saltRounds = 10; // 몇 자리 솔트를 만들 건지
const jwt = require(`jsonwebtoken`);

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true, //띄어쓰기 다 붙어쓰게하기
    unique: 1, // 유니크
  },
  password: {
    type: String,
    minLength: 5,
  },
  lastname: {
    type: String,
    maxLength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  }, //유용성
  tokenExp: { type: Number },
});

// 유저 정보를 저장하기 전에 무언가를 한다
userSchema.pre(`save`, function (next) {
  //-> 만약 이렇게만 쓰게 된다면 수정할 때도 암호화가 된다
  // 비밀번호 암호화 1. 솔트 만들기 2.
  var user = this;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    if (user.isModified("password")) {
      bcrypt.hash(user.password, salt, function (err, hash) {
        // 첫번째 인자에 비밀번호
        if (err) return next(err);
        user.password = hash; // 바꿔주기
        next(); // 끝나면 next로 보내버림 -> save로 보냄
      });
    } else {
      next();
    }
  });
});

userSchema.methods.comparePassword = function (plainPassword, callback) {
  //1번째 인자에 사용자가 로그인 할 때 입력한 비밀번호
  //plainPassword  === 암호화된 비밀번호 ??
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch); // 비밀번호가 같다면  err == null / isMatch값은 true => user.comparePassword의 isMatch값으로 이동
  });
};

userSchema.methods.generateToken = function (callback) {
  //jsonwebtoken 이용해서 token을 생성하기
  let user = this;
  let token = jwt.sign(user._id.toHexString(), `secretToken`); //Expected "payload" to be a plain object. -> toHexString()=> 16진수
  // user._id + `secretToken`
  user.token = token;
  user.save(function (err, user) {
    if (err) return callback(err);
    callback(null, user);
  });

  //user._id + `secretToken` = token -> 이 token을 가지고 id를 알 수 있다
};

userSchema.statics.findByToken = function (token, callback) {
  let user = this;
  //토큰을 decode 한다
  jwt.verify(token, `secretToken`, function (err, decoded) {
    //decoded 해독 된 것 -> user._id
    // 유저 아이디를 이용해서 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 db에 보관된 토큰이 일치하는지 확인

    user.findOne({ _id: decoded, token: token }, function (err, user) {
      //user --> true of false
      if (err) return callback(err);
      callback(null, user);
      // 유저가 있으면 인증 ok - true
      // 유저가 없으면 인증 no - false
    });
  });
};

const User = mongoose.model(`User`, userSchema); // 모델의 모델 User-> 스키마 UserSchema

module.exports = { User };
