`use strict`

import * as DOM from './dom.js';


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
    
    DOM.CarPost = () => { console.log(DOM.CarColourCreate.value.toString(),DOM.CarDoorCreate.value,DOM.CarMakeCreate.value, DOM.CarModelCreate.value, DOM.CarNameCreate.value,DOM.CarGarageCreate.value);
      createcar();}