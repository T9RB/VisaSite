const createDocumentButton = document.querySelector('#createDocuments');
const selectTypeDocument = document.querySelector('#services');

createDocumentButton.addEventListener('click', () => {
    let selectClass = document.getElementById('newDocumentsID');
    OnClick(selectClass);
});

function OnClick(element){
    if (element.style.display === 'none'){
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}

selectTypeDocument.addEventListener('change', function () {
    //Для визы
    let requestVisa = document.getElementById('requestVisaID');

    let dateRequest = document.getElementById('dateRequest').value;
    let goals = document.getElementById('departureGoals').value;
    let dateReturn = document.getElementById('dateReturn').value;
    let country = document.getElementById('countryDeparture').value;
    //----------------------------------------

    //Для паспорта
    let requestPassport = document.getElementById('requestPassportID');
    //------------------------------------------

    //Для записи на прием
    let reqAppointment = document.getElementById('requestAppointmentID');
    let dateAppointment = document.getElementById('dateReqAppointment');
    let purpose = document.getElementById('purposeAdmissionReq').value;
    //------------------------

    if (selectTypeDocument.value === 'visa'){
        requestPassport.style.display = 'none';
        reqAppointment.style.display = 'none';

        OnClick(requestVisa);
        CreateReqVisa(dateRequest,goals, dateReturn, country);
    }
    if (selectTypeDocument.value === 'passport'){
        requestVisa.style.display = 'none';
        reqAppointment.style.display = 'none';

        OnClick(requestPassport);
        CreateReqPassport();
    }
    if (selectTypeDocument.value === 'appointment'){
        requestVisa.style.display = 'none';
        requestPassport.style.display = 'none';

        OnClick(reqAppointment);
        CreateReqAppointment(dateAppointment, purpose);
    }
    else {
        requestVisa.style.display = 'none';
    }
});


function CreateReqVisa(dateRequest, goals, dateReturn, country){
    let clientID = sessionStorage.getItem('clientID');
    let dateReqString = `${dateRequest.year}-${dateRequest.month}-${dateRequest.day}`;
    let dateReturnString = `${dateReturn.year}-${dateReturn.month}-${dateReturn.day}`;

    let url = 'http://localhost:5004/api/v1/visa/new-record-visa';
    let request = new XMLHttpRequest();
    request.open('{POST}', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    let data = {
        number: null,
        dateReq: dateReqString,
        clientId: clientID,
        departureGoals: goals,
        returnDate: dateReturnString,
        country: country
    }

    let dataJSON = JSON.stringify(data);

    request.send(dataJSON);
}

function CreateReqPassport(){
    let clientID = sessionStorage.getItem('clientID');
    let currentDate = new Date();
    let dateReqString = `${currentDate.year}-${currentDate.month}-${currentDate.day}`;

    let url = 'http://localhost:5004/api/v1/visa/new-record-int-passport';
    let request = new XMLHttpRequest();
    request.open('{POST}', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    let data = {
        number: null,
        dateReq: dateReqString,
        clientId: clientID
    }

    let dataJSON = JSON.stringify(data);

    request.send(dataJSON);
}

function CreateReqAppointment(dateAppointment, purpose){
    let clientID = sessionStorage.getItem('clientID');
    let currentDate = new Date();
    let dateReqString = `${dateAppointment.year}-${dateAppointment.month}-${dateAppointment.day}`;

    let url = 'http://localhost:5004/api/v1/visa/new-record-appointment';
    let request = new XMLHttpRequest();
    request.open('{POST}', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    let data = {
        dateAppointment: dateReqString,
        purposeOfAdmission: purpose,
        clientId: clientID,
        employeeId: null
    }

    let dataJSON = JSON.stringify(data);

    request.send(dataJSON);
}



