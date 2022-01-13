"use strict";

const User = require("../../models/User");

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login"); 
  },
  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
  login: async (req, res) => { 
    const user = new User(req.body);  // 'user'라는 인스턴스[객체]를 생성한다. 
    const response = await user.login();
    return res.json(response);  // 클라이언트한테 전달되는 멘트 
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  }
}; 

module.exports = {
  output,
  process
};