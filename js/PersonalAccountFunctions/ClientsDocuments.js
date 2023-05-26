const myDocuments = document.querySelector('#myDocuments');
const addressBlock = document.querySelector('#textBlocksID');


myDocuments.addEventListener('click', () => {
    let blocks = document.getElementById('myDocumentsID');
    OnClick(blocks);
    CompletionCart();
});

function OnClick(element){
    if (element.style.display === 'none'){
        element.style.display = 'block';
    }
    else {
        element.style.display = 'none';
    }
}

function CompletionCart(){
    let clientID = sessionStorage.getItem('clientID');
    let passportData = document.getElementById('spanPassportData123');
    let registration = document.getElementById('registrationID');

    let dataIntPassport = document.getElementById('intPassportDataID');
    let organization = document.getElementById('organizationID');
    let dateStartPassport = document.getElementById('dateStartID');
    let dateEndPassport = document.getElementById('dateEndID');

    let numberVisa = document.getElementById('VisaDataID');
    let orgVisa = document.getElementById('organizationVisaID');
    let dateStartVisa = document.getElementById('dateStartVisaID');
    let dateEndVisa = document.getElementById('dateEndVisaID');

    GetClientData(clientID,passportData, registration);

    GetIntPassport(clientID, dataIntPassport, organization, dateStartPassport, dateEndPassport);

    GetVisa(clientID, numberVisa, orgVisa, dateStartVisa, dateEndVisa);
}

function GetClientData(clientID, passportData, registration){


    let url = `http://localhost:5004/api/v1/visa/client/id=${clientID}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function (){
        if (request.readyState === 4){
            if (request.status === 200){
                let response = JSON.parse(request.responseText);
                passportData.innerHTML = `${response.passportData[0].series} ${response.passportData[0].number}`;
                registration.innerHTML = `${response.registration[0].city}, ${response.registration[0].street}, ${response.registration[0].house}, ${response.registration[0].flat}`;
            }
            else {

            }
        }
    }
    request.send();
}

function GetIntPassport(clientID, dataIntPassport, organization, dateStart, dateEnd) {
    let url = `http://localhost:5004/api/v1/visa/int-passport/id=${clientID}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function (){
        if (request.readyState === 4){
            if (request.status === 200){
                let data = JSON.parse(request.responseText);

                dataIntPassport.innerHTML = `${data.series} ${data.number}`;
                organization.innerHTML = data.organization;
                dateStart.innerHTML = data.dateStart;
                dateEnd.innerHTML = data.dateEnd;
            }
            else {
                let intPassport = document.getElementById('doc-3-id');
                intPassport.style.display = 'none';
            }
        }
    }
    request.send();
}
function GetVisa(clientID, numberVisa, orgVisa, dateStartVisa, dateEndVisa) {
    let url = `http://localhost:5004/api/v1/visa/get-visa/id=${clientID}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function (){
        if (request.status === 200){
            let data = JSON.parse(request.responseText);

            numberVisa.innerHTML = data.number;
            dateStartVisa.innerHTML = data.dateStart;
            dateEndVisa.innerHTML = data.dateEnd;
            orgVisa.innerHTML = data.placeOfIssue;
        }
        else {
            let visa = document.getElementById('block-visa-id');
            visa.style.display = 'none';
            addressBlock.style.marginTop = '0';
        }
    }
    request.send();
}