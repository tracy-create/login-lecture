"use strict";

const id = document.querySelector("#id"), // 괄호 안에는 선택자가 들어옴, #은 id값을 가져오는 것을 의미 
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confrimPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    confrimPsword: confrimPsword.value,
  };

  // fetch를 이용해서 서버에 전달
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = "/login";  // 이동할 링크 경로 
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error ("회원가입 중 에러 발생");
  });
}