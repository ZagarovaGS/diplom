import {initLogin} from "./login.js";
import { ROOT_NODE } from "../constans.js";
import { initRegister} from "./register.js";

const template = `
 <div class ="container">
<div class= "buttons">
    <button id = "setLoginBtn">login</button>
    <button id = "setRegisterBtn">Register</button>
</div>

<form id = "loginForm">
<input  type = "email" placeholder = "email" id = "emailInput" autofocus><br>
<input  type = "password" placeholder="password" id = "passwordInput"><br>
<button id = "loginBtn">Submit</button><br>
</form>


<form id = "registerForm" name = "register" novalidate>           
    <input  type = "text" name = "login"  placeholder = "Login" id = "login"><br>  
    <input  type = "text" name = "name"  placeholder = "Name" id = "name"><br>
    <input  type = "number" name = "age" placeholder = "Age" id = "age"><br>   
    <input  type = "email" name = "email"  placeholder = "Email" id = "email"><br>
    <input  type = "text" name = "city"  placeholder = "City" id = "city"><br>
    <input  type = "password" name = "password"  placeholder = "Password" id = "password"><br>
    <input  type = "password" name = "repeatPassword" placeholder = RepeatPassword id = "repeatPassword"><br>
    <button id = "registerBtn">Regisier</button><br>
</form>
</div>
<div id = "message"></div>`

export const initForm = () => {
ROOT_NODE.innerHTML = template;
initLogin();

const {loginForm} = initLogin();
//const {registerForm} = initRegister();


document.getElementById("container");
document.getElementById("loginForm");
document.getElementById("registerForm");

const {registerForm, setDisableButtonState2} = initRegister();

const setLoginBtn = document.getElementById("setLoginBtn");
const setRegisterBtn = document.getElementById("setRegisterBtn");

setLoginFormActive();

function setLoginFormActive(){
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    setLoginBtn.classList.add("active-btn");
    setRegisterBtn.classList.remove("active-btn");
    //setDisableButtonState();
}


function setRegisterFormActive(){
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    setLoginBtn.classList.remove("active-btn");
    setRegisterBtn.classList.add("active-btn");
    //registerBtn.disabled = !formHelper.checkFormValidation();
}

 //loginForm
 setLoginBtn.addEventListener("click", setLoginFormActive);

 setRegisterBtn.addEventListener("click", setRegisterFormActive);
};
