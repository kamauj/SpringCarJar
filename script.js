`use strict`

import * as DOM from './dom.js';

DOM.createGarageButton.onclick = () => createGarage();
DOM.readGarages.onclick = () => getGarage();
// DOM.createCarButton.onclick = () => carCreate();

const getGarage = () => {
  DOM.garageOutput.innerHTML = ``;

  axios.get(`http://localhost:8080/garage/read`)
    .then((response) => {
      console.log(response);
      DOM.garageOutput.innerHTML = `${JSON.stringify(response.data)}`;
    }).catch((err) => {
      console.log(err);
    });
    
}

const createGarage = () => {
  axios.post(`http://localhost:8080/garage/create`, {name : DOM.garageName.value})
    .then((response) => {
      console.log(response);
      getGarage();
    }).catch((err) => {
      console.log(err);
    });
}
  
const createcar = () => {
  axios.post(`http://localhost:8080/car/create`,
    {
      "name": `${DOM.CarNameCreate.value}`,
      "colour":`${DOM.CarColourCreate.value}`,
      "make": `${DOM.CarMakeCreate.value}`,
      "model": `${DOM.CarModelCreate.value}`,
      "doors": `${DOM.CarDoorCreate.value}`,
    })
      
      .then((response) => {
         console.log(response);
          getGarage();
      }).catch((err) => {
          console.log(err);
    })};
    DOM.CarCreate.onclick = () => { console.log(DOM.CarColourCreate.value.toString(),DOM.CarDoorCreate.value,DOM.CarMakeCreate.value, DOM.CarModelCreate.value, DOM.CarNameCreate.value,DOM.CarGarageCreate.value);
      createcar();}