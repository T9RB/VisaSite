const button_submit = document.querySelector('form');
import {Authorization} from './module/authorizationModule.js';

button_submit.addEventListener('submit', (e) => {
    e.preventDefault();
    let login = document.getElementById('loginUser').value;
    let password = document.getElementById('passwordUser').value;

    Authorization(login, password, 1);
    if (sessionStorage.getItem('clientID') !== null){
        location.href = "PersonalPage.html";
    }
});
