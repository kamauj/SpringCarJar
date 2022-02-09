`use strict`;

import * as DOM from './dom.js';

const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
  DOM.carOutput.appendChild(child);
}
const garagelist = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
  DOM.carGarageName.appendChild(child);
}


//CAR READ
const carRead = () => {
  DOM.carOutput.innerHTML = ``;

  axios.get(`http://localhost:8080/car/read`)
    .then((response) => {
      if (!Array.isArray(response.data)) {
        writeItem(response.data);
      } else {
        for (let item of response.data) {
          writeItem(item);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
} 

//Read ALL Garages
const listGarage = () => {
  
  axios.get(`http://localhost:8080/garage/read`)
     
    .then((response) => {
      let activeGarage = [];
      if (!Array.isArray(response.data)) {
        console.log(response.data.name);//garagelist(response.data.name);
      } else {
        for (let item of response.data) {
          garagelist(item.name);
          activeGarage = [item.id, item.name];
          
           console.log(item.name);
           console.log(activeGarage);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
   
    
}
listGarage(); 


const selectGarage = (name) => {
  
  axios.get(`http://localhost:8080/garage/read`)

    .then((response) => {
      
      
    }).catch((err) => {
      console.log(err);
    });
}
selectGarage();



const createcar = () => {
  axios.post(`http://localhost:8080/car/create`, {
    name : DOM.name.value,
    colour :DOM.colour.value,
    make : DOM.make.value,
    model : DOM.model.value,
    doors : DOM.doors.value,
    garage: {id : 1}
  })
    .then((response) => {
      console.log(response);
      getGarage();
    }).catch((err) => {
      console.log(err);
  })};


const carDelete = () => {
  axios.delete(`http://localhost:8080/car/delete/${DOM.deleteCarID.value}`)
    .then((response) => {
      console.log(response);
      DOM.deleteCarID.value = "";
      carRead();
    }).catch((err) => {
      console.log(err);
    });
}

const carUpdate = () => {
  
  axios.put(`http://localhost:8080/car/update/${DOM.updateCarID.value}`, {
    "name" : `${DOM.updateCarName.value}`,
    "colour" :`${DOM.updateColour.value}`,
    "make" : `${DOM.updateMake.value}`,
    "model" : `${DOM.updateModel.value}`,
    "doors" : `${DOM.updateDoors.value}`
  })
    .then((response) => {
      console.log(response);
      carRead();
      DOM.updateCarName.value = "";
      DOM.updateColour.value = "";
      DOM.updateMake.value = "";
      DOM.updateModel.value = "";
      DOM.updateDoors.value = "";
      DOM.updateCarID.value = "";
    }).catch((err) => {
      console.log(err);
    });
}

const carReadID = () => {

  DOM.carOutput.innerHTML = ``;

  axios.get(`http://localhost:8080/car/read/${DOM.getCarID.value}`)
    .then((response) => {
      console.log(response);
      DOM.carOutput.innerHTML = `${JSON.stringify(response.data)}`;
    }).catch((err) => {
      console.log(err);
    });
}

// const carFindByName = () => {

//   DOM.carOutput.innerHTML = ``;

//   axios.get(`http://localhost:8080/car/findByName/${DOM.getCarByName.value}`)
//     .then((response) => {
//       console.log(response);
//       DOM.carOutput.innerHTML = `${JSON.stringify(response.data)}`;
//     }).catch((err) => {
//       console.log(err);
//     });
// }

DOM.allCarButton.onclick = () => carRead();
DOM.deleteCarButton.onclick = () => carDelete();
DOM.updateCarButton.onclick = () => carUpdate();
DOM.idCarButton.onclick = () => carReadID();
DOM.CarCreate.onclick = () => createcar();

// DOM.getCarByNameButton.onclick = () => carFindByName();