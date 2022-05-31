"use strict";

const hello = (req, res) => {
  res.render("../views/home/index.ejs");
  //   req, res 이하에 있는 내용들이 controler라고 불림
};

// function hello(req, res) {
//   res.render("./home/login");
// }

const login = (req, res) => {
  res.render("../views/home/login.ejs");

  //   ./home/login
  //   req, res 이하에 있는 내용들이 controler라고 불림
};

module.exports = {
  hello,
  login,
  //   key만 넣어주면 해당 key에 대한 value의 객체도 넘겨줌
};

// hello, login을 index.js에서 사용할 수 있도록 빼주는 것
