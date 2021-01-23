const mongoose = require(`mongoose`);

const userSchema = mongoose.Schema({
  name: {
    name: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //띄어쓰기 다 붙어쓰게하기
    unique: 1, // 유니크
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
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

const User = mongoose.model(`User`, userSchema);
