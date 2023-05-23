const button_submit = document.querySelector('form');

button_submit.addEventListener('submit', (e) => {
    e.preventDefault();
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
                location.href = "../personalAccount.html";
            }
            else {
                alert('Неверный логин или пароль');
            }
        }
        else{
            alert('Поля логин или пароль не заполненны');
        }
    }
    request.send(null);

});
