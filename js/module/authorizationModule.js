export function Authorization(login, password, num){
    let url = `http://localhost:5004/api/v1/visa/check-authorization/login=${login}/password=${password}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function () {
        if (request.status === 200) {
            let responseObject = JSON.parse(request.response);
            if (responseObject.access === true) {

                if (num === 1){
                    let clientID = responseObject.clientID;
                    sessionStorage.setItem('clientID', `${clientID}`);
                    location.href = "PersonalPage.html";
                }
                if (num === 2){
                    let userID = responseObject.accountID;
                    sessionStorage.setItem('userID', `${userID}`);
                    if (sessionStorage.getItem('userID') !== null){
                        location.href = "regestrationContinue.html";
                    }
                }
            } else {
                alert('Неверный логин или пароль');
            }
        }
    }
    request.send(null);
}

