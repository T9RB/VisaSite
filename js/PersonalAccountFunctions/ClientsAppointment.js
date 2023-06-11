const myAppointment = document.querySelector('#myRequests');
const objectsList = document.querySelector('#objects-list');
const passportList = document.querySelector('#reqIntPassID');
const details = document.getElementById('regAppID');


myAppointment.addEventListener('click', () => {
    let blocks = document.getElementById('myRequestsID');
    // let reqApp = document.getElementById('reqAppID');
    // let reqPassport = document.getElementById('reqIntPassport');
    OnClick(blocks);

    // if (blocks.style.display !== 'none'){
    //     let urlRecord = `http://localhost:5004/api/v1/visa/records-appointment-client/id=${sessionStorage.getItem('clientID')}`;
    //     let urlPassport = `http://localhost:5004/api/v1/visa/req-int-passport/id=${sessionStorage.getItem('clientID')}`;
    //     let urlVisa = `http://localhost:5004/api/v1/visa/req-visa/id=${sessionStorage.getItem('clientID')}`;
    //
    //     getData(urlRecord, 1, reqApp);
    //     getData(urlPassport, 2, reqPassport);
    //     /*getData(urlVisa, 3);*/
    // }
    // else {
    //     while (objectsList.firstChild){
    //         objectsList.removeChild(objectsList.firstChild);
    //     }
    // }
});



function CreateObject(dataJSON, param) {
    // const objectItem = document.createElement('li');
    // const objectItem2 = document.createElement('li');
    // const dateEl = document.createElement('div');
    // const employeeEl = document.createElement('div');
    // const descriptionEl = document.createElement('div');
    //
    // const date2El = document.createElement('div');
    // const numberEl = document.createElement('div');
    //
    // if (param === 1){
    //     for (let key in dataJSON){
    //         let date = `Дата: ${dataJSON[key].dateAppointment}`;
    //         let employee = `Сотрудник: ${dataJSON[key].employee[key].surname} ${dataJSON[key].employee[key].nameEmp} ${dataJSON[key].employee[key].middleName}`;
    //         let description = `Описание заявки: ${dataJSON[0].purposeOfAdmission}`;
    //
    //         dateEl.classList.add('date');
    //         dateEl.textContent = date;
    //
    //         employeeEl.classList.add('employee');
    //         employeeEl.textContent = employee;
    //         descriptionEl.classList.add('description');
    //         descriptionEl.textContent = description;
    //
    //
    //         objectItem.appendChild(dateEl);
    //         objectItem.appendChild(employeeEl);
    //         objectItem.appendChild(descriptionEl);
    //
    //         objectsList.appendChild(objectItem);
    //     }
    // }
    // if (param === 2){
    //     for (let key in dataJSON){
    //         let number = `Номер заявки: ${dataJSON[key].number}`;
    //         let date = `Дата: ${dataJSON[key].dateReq}`;
    //
    //         date2El.classList.add('date');
    //         date2El.textContent = date;
    //
    //         numberEl.classList.add('number');
    //         numberEl.textContent = number;
    //
    //         objectItem2.appendChild(date2El);
    //         objectItem2.appendChild(numberEl);
    //
    //         passportList.appendChild(objectItem2);
    //     }
    // }
    let content = document.getElementById('elementBlockID');
    const dataHtml = dataJSON.map(item => `
    <div class="row">
     <div class="col">
      <p>Дата: ${item.dateAppointment}</p>
     </div>
    </div>
    <div class="row">
     <div class="col">
      <label>Сотрудник:</label>
      <input type="text" value="${item.employee.surname} ${item.employee.nameEmp} ${item.employee.middleName}" readonly>
     </div>
     <div class="col">
      <label>Описание заявки:</label>
      <textarea readonly>${item.purposeOfAdmission}</textarea>
     </div>
    </div>
    <hr>
   `).join('');

    content.innerHTML = `
    <h3>Список заявок:</h3>
    ${dataHtml}
   `;
    content.hidden = false;
}

function getData(url, param, object){

    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("x-api-key", "0e4bc10b5e334a2c9a89ede9417df633");

    request.onload = function (){
        if (request.readyState === 4){
            if (request.status === 200){
                let response = JSON.parse(request.responseText);
                if (response !== null){
                    CreateObject(response, param);
                }
                else {
                    object.style.display = 'none';
                }

            }
            else {

            }
        }
    }
    request.send();
}

details.addEventListener("toggle", function() {
    let urlRecord = `http://localhost:5004/api/v1/visa/records-appointment-client/id=${sessionStorage.getItem('clientID')}`;
    let reqApp = document.getElementById('blockEl');

    getData(urlRecord, 1, reqApp);
})