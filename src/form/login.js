import {INVALID_CLASS} from "../constans.js";
export function initLogin(){

const input = document.getElementById("emailInput");
const div = document.getElementById("message");
const input2 = document.getElementById("passwordInput");
const button = document.getElementById("loginBtn");

const user = {
    email: "222@mail.ru",
    name: "Nic",
    password: "3333",
}

input.addEventListener("input", (event) =>{
    const isValid = event.target.value;
    if (!isValid.match(/\b[A-z0-9._%+-]+@[A-z0-9]+\.[A-z]+\b/)){
       event.target.classList.add("invalid");
    } else{
    event.target.classList.remove("invalid"); 
    }
    console.log(isValid);
});

 input2.addEventListener("input", (event) =>{
    const isValid = event.target.value;
    if (!isValid){
        event.target.classList.add("invalid");
     } else{
     event.target.classList.remove("invalid"); 
     }
 })
console.log(input2);



 button.addEventListener("click", function(event) {
    //preventDefault();
    let myEmail = document.querySelector("#emailInput").value;
    let myPassword = document.querySelector("#passwordInput").value;
   

    if (myEmail && myPassword){
       console.log(user);
        if (myEmail === user.email && myPassword === user.password){   
            div.innerText = `Hello, ${user.name}` ; 
            setDisableButtonState()  
    }
        else if (myEmail !== user.email || myPassword !== user.password) {
            
            div.innerText = "Вы ввели неверный пароль. Попробуйте снова." ;
        }
    }    
       else setDisableButtonState();
    
    });

    function setDisableButtonState(){
        if (emailInput.value === "" || passwordInput.value === ""){
        button.disabled = true;
    } else {
        button.disabled = false;  
    }
    }
    
        return {loginForm, setDisableButtonState};
}
