"use strict";

class UserStorage {
  static #users = {
    id: ["seowon", "서원", "jessica"],
    psword: ["1234", "12345", "123456"],
    name: ["손서원", "이원서", "길탐정"],
  };
  
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;