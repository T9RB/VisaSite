const button_open = document.querySelector('button');
const button_close = document.querySelector('.popup_escape')
const form = document.querySelector('#auth_window');
const popup = document.querySelector('.popup');
const button_success = document.querySelector('.btn-success')

button_open.addEventListener('click', () => {
    form.classList.add('open');
    popup.classList.add('popup_open');
});

button_success.addEventListener('click', () => {
    let login = document.getElementById('loginUser').value;
    let password = document.getElementById('passwordUser').value;
    if (login.length === 0 && password.length === 0){
        alert("Логин или пароль не заполнены!");
    }
    else{
        let login = document.getElementById('loginUser').value;
        let password = document.getElementById('passwordUser').value;

        fetch(`http://localhost:5004/api/v1/visa/check-authorization/login=${login}/password=${password}`, {
            method: 'GET',
            headers: {
                'apikey': '0e4bc10b5e334a2c9a89ede9417df633',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.value === 'true'){
                    location.href = "html/personalAccount.html";
                }
            })
            .catch(error => {
                alert(error);
            });
    }

});

button_close.addEventListener('click', () => {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});