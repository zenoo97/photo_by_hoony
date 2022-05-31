"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// router.get("/", (req, res) => {
//   // 루트 경로로 들어오면 이렇게 하겠다 의미
//   res.render("./home/index");
//   //   폴더명 지정하는 법
// });
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;
// router를 외부파일에서 사용할 수 있도록 외부로 내보내기 해주는 명령
// app.js에서 app.use로 사용할 것임
