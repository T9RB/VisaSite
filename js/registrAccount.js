const button_reg = document.querySelector('form');

button_reg.addEventListener('submit',  (e) => {
    let login = document.getElementById('loginReg').value;
    let password = document.getElementById('pswReg').value;
    let passwordRepeat = document.getElementById('pswRep').value;
    document.getElementById('alertClass').visibility = 'hidden';

    if (login != "" && password != "" && passwordRepeat === password){
        e.preventDefault();
        try{
            let url = `http://localhost:5004/api/v1/visa/new-user/login=${login}&password=${password}`;
            let request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

            let data = JSON.stringify({"login" : login, "password": password});

            // request.send(data);
            location.href = "regestrationContinue.html";
            sessionStorage.setItem();

        }catch (err){
            ShowMessage("Логин уже существует!");
        }

    }
    else {
        if (login === "" && password === "" && passwordRepeat === ""){
            ShowMessage("Заполните форму!");
        }
        else if(login === "" || password === ""){
            ShowMessage("Поле 'Логин' или 'Пароль' не заполнено!");
            document.getElementById('loginReg').focus();
        }
        else if(password !== passwordRepeat) {
            ShowMessage("Указанные пароли не совпадают!");
            document.getElementById('pswRep').focus();
        }
    }

    function ShowMessage(messageForUser){
        let allertElement = document.getElementById('alertClass');
        allertElement.textContent = `Ошибка: ${messageForUser}`;
        allertElement.style.display = "flex";
    }

    setTimeout(function() {
        let alertDiv = document.getElementById('alertClass');
        alertDiv.style.display = 'none';
    }, 5000);
});

