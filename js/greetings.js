const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const idCheckText = document.querySelector("#id-check");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

loginForm.addEventListener("submit", loginFormSubmit);

function outPutlocalStorage(outText) {
  const LSinfo = localStorage.getItem(USERNAME_KEY);
  idCheckText.classList.remove(HIDDEN_CLASSNAME);
  idCheckText.innerHTML = `아이디 또는 비밀번호는 ${LSinfo}로 localStorage ${outText}`;
}

function loginFormSubmit(event) {
  const userName = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  outPutlocalStorage("입력되었습니다.");

  event.preventDefault();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  outPutlocalStorage("저장되어 있습니다.");
}
