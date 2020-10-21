import { ROOT_NODE } from "../constans.js";

const template = `<div class ="userTable">`;


export function initServerList (){
 ROOT_NODE.innerHTML = template;
const url = `https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json`;
 const div=document.getElementById("list");
const character = fetch(url)
.then((response) => {
    return response.json();

})
.then((data) => {
    return data;
    
})
.catch((error) => {
    console.log(error);
});
return character;
}