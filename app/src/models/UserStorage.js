"use strict";

// users.json (users 테이블)에 접근하기 위한 코드 작성 
const fs = require("fs").promises; // fs : 접근 수단 변수 

class UserStorage {
  static #getUserInfo() {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if(isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      }) // 위의 로직이 성공했을 때 실행되는 곳
      .catch(console.error); // 실패했을 때 
  } 

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      }) // 위의 로직이 성공했을 때 실행되는 곳
      .catch(console.error);  // 실패했을 때 
    // './' 현재 경로 : app.js가 있는 파일
  }
 
  static async save(userInfo) {
    const users = await this.getUsers(true);
    if(users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;