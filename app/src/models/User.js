"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, psword } = await UserStorage.getUserInfo(client.id);

    if(id){
      if(id === client.id && psword === client.psword) {
        return { success : true };
      }
      return { success : false, msg: "비밀번호가 틀렸습니다."};
    }
    return { success : false, msg: "존재하지 않는 아이디입니다."};
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User; // 외부에서 해당 모듈을 사용할 수 있도록 해주는 코드 