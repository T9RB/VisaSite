const button_open = document.querySelector('button');
const button_close = document.querySelector('.popup_escape')
const form = document.querySelector('#auth_window');
const popup = document.querySelector('.popup');
const button_success = document.querySelector('.btn-success');

button_open.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
});

button_success.addEventListener('click', () => {

    let login = document.getElementById('loginUser').value;
    let password = document.getElementById('passwordUser').value;

    let url = `http://localhost:5004/api/v1/visa/check-authorization/login=${login}/password=${password}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function (){
        if (request.status === 200){
            let resoponseObject = JSON.parse(request.response);
            if (resoponseObject.access === true){
                let userID = toString(resoponseObject.accountID);
                sessionStorage.setItem('userID', `${userID}`);
                location.href = "../personalAccount.html";
            }
            else {
                alert('Неверный логин или пароль')
            }
        }
        else{
            alert('Поля логин или пароль не заполненны')
        }
    }
    request.send(null);

});

button_close.addEventListener('click', () => {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});