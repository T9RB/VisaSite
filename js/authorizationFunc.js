const login = document.getElementById('loginUser').value;
const password = document.getElementById('passwordUser').value;

fetch(`http://localhost:5004/api/v1/visa/check-authorization/login=${login}/password=${password}`, {
    method: 'GET',
    headers: {
        'apikey': '0e4bc10b5e334a2c9a89ede9417df633',
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        if (data.value === true){
            location.href = "html/personalAccount.html";
        }
    })
    .catch(error => {
        // обрабатываем ошибку
        alert("Неверный логин или пароль!")
    });
