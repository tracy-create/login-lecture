"use strict";

const User = require("../../models/User");

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login"); 
  },
};

const process = {
  login: (req, res) => { 
    const user = new User(req.body);
    const response = user.login();
    console.log(response);
    return res.json(response);  // 클라이언트한테 전달되는 멘트 

  },
};

module.exports = {
  output,
  process
};