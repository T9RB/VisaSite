const button_reg = document.querySelector('form');
import {Authorization} from "./module/authorizationModule.js";

button_reg.addEventListener('submit',  (e) => {
    e.preventDefault();
    let login = document.getElementById('loginReg').value;
    let password = document.getElementById('pswReg').value;
    /*let passwordRepeat = document.getElementById('pswRep').value;*/
    document.getElementById('alertClass').visibility = 'hidden';

    try{
        CreateAccount(login, password);
        Authorization(login, password, 2);
    }catch (err){
        alert("Логин уже существует!");
    }
});

function CreateAccount(login, password){
    let url = `http://localhost:5004/api/v1/visa/new-user/login=${login}&password=${password}`;
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    /*let data = JSON.stringify({"login" : login, "password": password});*/
    request.send(null);
}



