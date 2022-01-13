"use strict";

const id = document.querySelector("#id"), // 괄호 안에는 선택자가 들어옴, #은 id값을 가져오는 것을 의미 
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };

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