"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register); // 서버 단에서 구현되고 있는 것 

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router; 