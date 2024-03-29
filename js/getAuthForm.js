const button_open = document.querySelector('button');
const button_close = document.querySelector('.popup_escape')
const form = document.querySelector('#auth_window');
const popup = document.querySelector('.popup');
const button_success = document.querySelector('.btn-success');
import {Authorization} from './module/authorizationModule.js';

button_open.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
});

button_success.addEventListener('click', () => {

    let login = document.getElementById('loginUser').value;
    let password = document.getElementById('passwordUser').value;

    Authorization(login, password);

});

button_close.addEventListener('click', () => {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});
