
import { ROOT_NODE } from "../constans.js";


import {user} from "../constans.js";
const template = `
<div id = "countResult"></div>
<table id = "userTable"></table>`



export function initUsers(){
ROOT_NODE.innerHTML = template;
let deleteBtn = document.createElement("button");
const div = document.getElementById("countResult");

function countMale(user){
    let countM = 0;
for(let i = 0; i < user.length; i++) {
    if (user[i].gender === "male"){
        countM++;
}
}
return countM;
}


function countFamale(user){
    let countF = 0
    for(let i = 0; i < user.length; i++) {
       
        if (user[i].gender === "female"){
            countF++;
    }
    }
    return countF
    }





function maxBalance(user){
    let maxCount = 0;
    for (const {balance} of user) {
    const convertBalance = Number(balance.replace(/\$|\,/g,""));
    if (convertBalance>maxCount){
        maxCount = convertBalance;
    }
}
return maxCount;
}



function createUserTable(user){
const userTable = document.getElementById("userTable");
const header = document.createElement("tr");


const nameHeaderCell = document.createElement("th");
const companyHeaderCell = document.createElement("th");
const emailHeaderCell = document.createElement("th");
const phoneHeaderCell = document.createElement("th");
const balanceHeaderCell = document.createElement("th");
const deleteHeaderCell = document.createElement("th");


header.appendChild(nameHeaderCell);
header.appendChild(companyHeaderCell);
header.appendChild(emailHeaderCell);
header.appendChild(phoneHeaderCell);
header.appendChild(balanceHeaderCell);
header.appendChild(deleteHeaderCell);

nameHeaderCell.innerText = "Имя";
companyHeaderCell.innerText = "Компания";
emailHeaderCell.innerText = "Email";
phoneHeaderCell.innerText = "Телефон";
balanceHeaderCell.innerText = "Баланс";
deleteHeaderCell.innerText = "Удалить";

userTable.appendChild(header);

header.className = "tableHeader";

for(let i = 0; i < user.length; i++) {
    
    let name = user[i].name;
    let company = user[i].company;
    let email = user[i].email;
    let phone = user[i].phone;
    let balance = user[i].balance;
    deleteBtn = user[i].deleteBtn;

    

    const tr = document.createElement("tr");

    const nameCell = document.createElement("td");
    const companyCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    const balanceCell = document.createElement("td");
    const deleteBtnCell = document.createElement("button");

    nameCell.appendChild(document.createTextNode(name));
    companyCell.appendChild(document.createTextNode(company));
    emailCell.appendChild(document.createTextNode(email));
    phoneCell.appendChild(document.createTextNode(phone));
    balanceCell.appendChild(document.createTextNode(balance));
   
    deleteBtnCell.innerText = "Delete";
    deleteBtnCell.className = "deleteBtn";
    
    
    deleteBtnCell.addEventListener("click", () => {
        tr.remove();
        const indexToDelete = user.indexOf(user[i]);
        user.splice(indexToDelete, 1);
        const newCountMale = countMale(indexToDelete);
        const newCountFamale = countFamale(indexToDelete);
        const newMaxBalance = maxBalance(indexToDelete);
        div.innerText = `Количество мужчин ${newCountMale}
        Количество женщин ${newCountFamale}
        Максимальный баланс ${newMaxBalance}`;
        
    });

    function handleIsActive(){
        if (user.isActive) {
          tr.Classlist("active");
        }
    }
    handleIsActive(user);

    tr.appendChild(nameCell);
    tr.appendChild(companyCell);
    tr.appendChild(emailCell);
    tr.appendChild(phoneCell);
    tr.appendChild(balanceCell);
    tr.appendChild(deleteBtnCell);

userTable.appendChild(tr);

};

};



const url = `https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json`;
    
   const character = fetch(url)
   .then((response) => {
       return response.json();
   
   })
   .then((user) => {
    createUserTable(user);
    const maxCountBalance = maxBalance(user);
    const males = countMale(user);
    const famale = countFamale(user);
    div.innerText = `Количество мужчин ${males} 
    Количество женщин ${famale}
    Максимальный баланс ${maxCountBalance}`;   
       
   })
   .catch((error) => {
       console.log(error);
       ROOT_NODE.innerHTML = "<div>Sorry, the connection is lost. Please, try again</div>"
   });

};

