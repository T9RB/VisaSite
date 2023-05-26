const dataClientButton = document.querySelector('#loadDataClient');
const putDataButton = document.querySelector('#putDataButton');

dataClientButton.addEventListener('click', () => {
    let container = document.getElementById('dataClient');
    let surname = document.getElementById('surnameReg');
    let name = document.getElementById('nameClientReg');
    let middleName = document.getElementById('middleNameClientReg');
    let placeBirth = document.getElementById('placeOfBirthReg');
    let nationally = document.getElementById('nationallyReg');
    let birthday = document.getElementById('birthdayReg');
    let familyStatus = document.getElementById('FamilyStatusReg');
    let citizenship = document.getElementById('citizenshipReg');
    let series = document.getElementById('passportSeriesReg');
    let number = document.getElementById('passportNumberReg');
    let city = document.getElementById('cityReg');
    let street = document.getElementById('streetReg');
    let house = document.getElementById('houseReg');
    let flat = document.getElementById('flatReg');
    OnClick(container);
    LoadDataClient(surname, name, middleName,
        placeBirth, nationally, birthday,
        familyStatus, citizenship, series, number,
        city, street, house, flat);
});

putDataButton.addEventListener('click', () => {

});

function OnClick(element){
    if (element.style.display === 'none'){
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}

function LoadDataClient(surname, name, middleName,
                        placeBirth, nationally, birthday,
                        familyStatus, citizenship, series, number,
                        city, street, house, flat){

        let clientID = sessionStorage.getItem('clientID');
        let url = `http://localhost:5004/api/v1/visa/client/id=${clientID}`;
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

        request.onload = function (){
            if (request.status === 200){
                const responseObject = JSON.parse(request.responseText);

                surname.value = responseObject.surname;
                name.value = responseObject.nameClient;
                middleName.value = responseObject.middleName;
                placeBirth.value = responseObject.placeOfBirth;
                nationally.value = responseObject.nationaly;
                birthday.value = responseObject.birthday;
                familyStatus.value = responseObject.familyStatus;
                citizenship.value = responseObject.citizenship;
                series.value = responseObject.passportData[0].series;
                number.value = responseObject.passportData[0].number;
                city.value = responseObject.registration[0].city;
                street.value = responseObject.registration[0].street;
                house.value = responseObject.registration[0].house;
                flat.value = responseObject.registration[0].flat;
            }
            else {

            }
        }
    request.send();
}

function CreateRequestVisa(currentDate ,goals, dateReturn, country){

}

