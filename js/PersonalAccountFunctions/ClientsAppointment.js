const myAppointment = document.querySelector('#myRequests');
const objectsList = document.querySelector('#objects-list');



myAppointment.addEventListener('click', () => {
    let blocks = document.getElementById('myRequestsID');
    OnClick(blocks);

    if (blocks.style.display !== 'none'){
        let urlRecord = `http://localhost:5004/api/v1/visa/records-appointment-client/id=${sessionStorage.getItem('clientID')}`;
        let urlPassport = `http://localhost:5004/api/v1/visa/req-int-passport/id=${sessionStorage.getItem('clientID')}`;
        let urlVisa = `http://localhost:5004/api/v1/visa/req-visa/id=${sessionStorage.getItem('clientID')}`;

        getData(urlRecord, 1);
    }
    else {
        while (objectsList.firstChild){
            objectsList.removeChild(objectsList.firstChild);
        }
    }
});



function CreateObject(dataJSON, param) {
    const objectItem = document.createElement('li');
    const dateEl = document.createElement('div');
    const employeeEl = document.createElement('div');
    const descriptionEl = document.createElement('div');

    for (let key in dataJSON){
        if(param === '1'){
            let date = `Дата: ${dataJSON[key].dateAppointment}`;
            let employee = `Сотрудник: ${dataJSON[key].employee[key].surname} ${dataJSON[key].employee[key].nameEmp} ${dataJSON[key].employee[key].middleName}`;
            let description = `Описание заявки: ${dataJSON[0].purposeOfAdmission}`;

            dateEl.classList.add('date');
            dateEl.textContent = date;

            employeeEl.classList.add('employee');
            employeeEl.textContent = employee;
            descriptionEl.classList.add('description');
            descriptionEl.textContent = description;


            objectItem.appendChild(dateEl);
            objectItem.appendChild(employeeEl);
            objectItem.appendChild(descriptionEl);

            objectsList.appendChild(objectItem);
        }
        if (param === '2'){
            let date = `Дата: ${dataJSON[key].dateAppointment}`;
            let number = `Номер заявки: ${dataJSON[key].employee[key].surname} ${dataJSON[key].employee[key].nameEmp} ${dataJSON[key].employee[key].middleName}`;

            dateEl.classList.add('date');
            dateEl.textContent = date;

            employeeEl.classList.add('number');
            employeeEl.textContent = number;

            objectItem.appendChild(dateEl);
            objectItem.appendChild(employeeEl);
            objectItem.appendChild(descriptionEl);

            objectsList.appendChild(objectItem);
        }


    }

}

function getData(url, param){

    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function (){
        if (request.readyState === 4){
            if (request.status === 200){
                let response = JSON.parse(request.responseText);
                CreateObject(response, param);
            }
            else {

            }
        }
    }
    request.send();
}