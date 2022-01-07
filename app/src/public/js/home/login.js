"use strict";

const id = document.querySelector("#id"), // 괄호 안에는 선택자가 들어옴, #은 id값을 가져오는 것을 의미 
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(req);

  // fetch를 이용해서 서버에 전달
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
    body: JSON.stringify(req),
  });
}