const button_reg_end = document.querySelector('form');

button_reg_end.addEventListener('submit', (e) => {
    e.preventDefault();
    let surname = document.getElementById('surnameReg').value;
    let name = document.getElementById('nameClientReg').value;
    let middleName = document.getElementById('middleNameClientReg').value;
    let placeBirth = document.getElementById('placeOfBirthReg').value;
    let nationally = document.getElementById('nationallyReg').value;
    let birthday = document.getElementById('birthdayReg').value;
    let familyStatus = document.getElementById('FamilyStatusReg').value;
    let passportSeries = document.getElementById('passportSeriesReg').value;
    let passportNumber = document.getElementById('passportNumberReg').value;
    let registrationCity = document.getElementById('cityReg').value;
    let registrationStreet = document.getElementById('streetReg').value;
    let registrationHouse = document.getElementById('houseReg').value;
    let registrationFlat = document.getElementById('flatReg').value;
    let citizenship = document.getElementById('citizenshipReg').value;

    // document.getElementById('alertClass').visibility = 'hidden';

        try{
            let accountID = sessionStorage.getItem('userID');
            let url = `http://localhost:5004/api/v1/visa/new-client/number-user=${accountID}`;
            let request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

            let data = {
                surname: surname,
                nameClient: name,
                middleName: middleName,
                placeOfBirth: placeBirth,
                nationaly: nationally,
                birthday: birthday,
                familyStatus: familyStatus,
                citizenship: citizenship,
                passportData: [ {
                    series: passportSeries,
                    number: passportNumber
                }
                ],
                registration: [ {
                    city: registrationCity,
                    street: registrationStreet,
                    house: registrationHouse,
                    flat: registrationFlat
                }
                ]
            };

            let dataJSON = JSON.stringify(data);
            request.send(dataJSON);

            request.onload = function (){
                if (request.status === 200){
                    let response = JSON.parse(request.response);
                    sessionStorage.setItem('clientID', `${response}`);
                    if (sessionStorage.getItem('clientID') !== null){
                        location.href = "PersonalPage.html";
                    }
                }
            }


        }catch (err){
            /*ShowMessage("Логин уже существует!");*/
        }

   /* else {
        if (surname === '' && name === '' && middleName === '' && placeBirth === '' && nationally === '' && birthday === ''
            && familyStatus === '' && passportSeries === '' && passportNumber === '' && registrationCity === ''
            && registrationStreet === '' && registrationHouse === '' && registrationFlat === '' && citizenship === ''){

            ShowMessage("Заполните форму!");
        }
        else if(surname === '' && name === '' && middleName === ''){
            ShowMessage("Поле 'Фамилия' или 'Имя', или 'Отчетсво' не заполнено!");
            document.getElementById('surnameReg').focus();
        }
        else if(placeBirth === '' && nationally === '' && birthday === '') {
            ShowMessage("Поле 'Место рождения' или 'Национальность', или 'Дата рождения' не заполнено!");
            document.getElementById('placeOfBirthReg').focus();
        }
        else if(familyStatus === '' && passportSeries === '' && passportNumber === ''){
            ShowMessage("Поле 'Семейное положение' или 'Серия паспорта', или 'Номер паспорта' не заполнено!");
            document.getElementById('familyStatusClient').focus();
        }
        else if(registrationCity === '' && registrationStreet === '' && registrationHouse === '' && registrationFlat === ''){
            ShowMessage("Поле 'Город' или 'Улица', или 'Номер дома', 'Номер квартира' не заполнено!");
            document.getElementById('cityReg').focus();
        }
        else if(citizenship === ''){
            ShowMessage("Поле 'Гражданство' не заполнено!");
            document.getElementById('cityReg').focus();
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
    }, 5000);*/
});