// // express 프레임워크 없이 개발하는 방법
// const http = require("http");
// // 내장함수임
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
//   if (req.url === "/") {
//     res.end("여기는 루트 입니다.");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다.");
//   }
// });
// // if문을 넣는 순간 코드가 더러워짐 -> express 모듈을 써야하는 이유

// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다.");
// });

//모듈

const express = require("express");
const app = express();

// 라우팅
const home = require("./routs/home");
// 앱 세팅
app.set("views", "./views");
// views를 사용, views라는 폴더명
app.set("view engine", "ejs");
// html을 view engine으로 설정 -> ejs(그냥 html이다)

// js를 읽어와줘 라는 의미

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드
// home에서 js를 받아서 / 경로로 오면 home으로 보내줄 것임. res.render('/')이 나옴
// const home = require("./routs/home")으로 받아옴 -> module.exports.router를 해준 것을 받아오는 것

module.exports = app;
// 내보내 줘야 www.js 에서 app을 사용할 수 있음
