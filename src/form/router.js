import { ROOT_NODE } from "../constans";
import { initUsers } from "../users/user";
import { initForm } from "./form"

export const initRouter = () =>{
    window.addEventListener("hashchange",(event) => {
      if (window.location.hash === "#/form"){
          initForm();
      } else if (window.location.hash === "#/user"){
          initUsers();
      } else {
          ROOT_NODE.innerHTML = `<div>Page is not available</div>` 
      }
    })
}

