const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 유저네임을 타이핑을 통해 받을 때 //
function handleLoginFormSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting (username) {
    greeting.innerText = `Hello ${username}`;
    grreting.classList.remove(HIDDEN_CLASSNAME);
}

// 유저네임을 저장된 스토리지를 통해 받을 때, 리프레시 되도 geeting 유지됨//

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginFormSubmit)
} else {
    paintGreeting(savedUsername);
}