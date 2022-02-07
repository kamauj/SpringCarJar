`use strict`

import * as DOM from './dom.js';

DOM.UpdateCar.onclick = () => PutCar();
DOM.DeleteCar.onclick = () => DeleteCar();

//Delete (DELETE)
const DeleteCar = () => {
    DOM.CarOutput.innerHTML = ``;

    axios.delete(`http://localhost:8080/car/delete/${DOM.CarId.value}`)
        .then((response) => {
            console.log(response);
            DOM.CarOutput.innerHTML = `${JSON.stringify(response.data)}`;
        }) .catch((err) => {
            console.log(err);
          });
}

//Update (PUT)
const PutCar = () => {
    DOM.CarOutput.innerHTML = ``;

    axios.put(`http://localhost:8080/car/update/${DOM.CarId.value}`)
        .then((response) => {
            console.log(response);
            DOM.CarOutput.innerHTML = `${JSON.stringify(response.data)}`;
        }).catch((err) => {
            console.log(err);
        });
}