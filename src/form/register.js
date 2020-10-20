import {INVALID_CLASS} from "../constans.js";

export function initRegister(){

    const form = document.forms.registerForm;
    const btn = document.getElementById("btn");
    const INVALID_CLASS = "invalid";
    document.getElementById("container");
    document.getElementById("registerForm");
    
    const formHelper = {
       login: {
           value: "",
           valid: false,
           checkValidation(){
            this.login.valid = this.login.value.match(/,|\./);
            
            }
       },
       name: {
        value: "",
        valid: false,
        checkValidation(){
            this.name.valid = this.name.value !=="";
        }
    },
       age: { //проверяю, но я ему по умолчанию number поставила
        value: "",
        valid: false,
        checkValidation(){
            
            this.age.valid = this.age.value.match(/\d/)  ;
        }
    
    },
       email: {
        value: "",
        valid: false,
        checkValidation(){
            
            this.email.valid = this.email.value.match(/\b[A-z0-9._%+-]+@[A-z0-9]+\.[A-z]+\b/);
        }
    },
       city: {
        value: "",
        valid: false,
        checkValidation(){
            this.city.valid = this.city.value !=="";
        }
    },
       password: {
        value: "",
        valid: false,
        checkValidation(){
            this.password.valid = this.password.value !=="";
        }
    },
       repeatPassword: {
        value: "",
        valid: false,
        checkValidation(){
            this.repeatPassword.valid = this.password.value === this.repeatPassword.value;
        }
    },
    checkFormValidation(){
        for (const key in this){
            if (typeof this[key] !== "function" && this[key].valid === false){
                return false
            }
        }
        return true;
    },
    getValue(){
        return{
            login: this.login.value,
            name: this.name.value,
            age: this.age.value,
            city: this.city.value,
            email: this.email.value,
            password: this.password.value,
          
        }
    }
    };
    
    
    
    
    form.addEventListener ("input", (event) => {
        const value = event.target.value;
        const name = event.target.name;
        formHelper[name].value = value;
        const bindedValidator = formHelper[name].checkValidation.bind(formHelper);
        bindedValidator();
    
        registerBtn.disabled = !formHelper.checkFormValidation();
        console.log(formHelper);
        console.log(btn);
        handleClassAdding(event.target, formHelper[name].valid);
    
      
    })
    
    function handleClassAdding(domNode, isValid){
        if (isValid){
            domNode.classList.remove(INVALID_CLASS);
        }
        else{
            domNode.classList.add(INVALID_CLASS);  
        }
    }
    
    form.addEventListener("submit", (event)=> {
        event.preventDefault();
        const user = formHelper.getValue();   
        console.log(user);
        
    })

    function setDisableButtonState2(){
        if (email.value === "" || password.value === ""){
        btn.disabled = true;
    } else {
        btn.disabled = false;  
    }
    }
    

return {registerForm, setDisableButtonState2};
};