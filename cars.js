`use strict`;

import * as DOM from './dom.js';

const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
  DOM.carOutput.appendChild(child);
}

DOM.readCarButton.onclick = () => carRead();

DOM.deleteCarButton.onclick = () => carDelete();
DOM.updateCarButton.onclick = () => carUpdate();
DOM.specificCarButton.onclick = () => carReadID();
DOM.getCarByNameButton.onclick = () => carFindByName();

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
let passById;
const createcar = () => {
  axios.post(`http://localhost:8080/car/create`, {
    "name" : `${DOM.name.value}`,
    "colour" :`${DOM.colour.value}`,
    "make" : `${DOM.make.value}`,
    "model" : `${DOM.model.value}`,
    "doors" : `${DOM.doors.value}`,
    "garage": {"id" : 4}
    //nameToGarage(`${DOM.createGarageButton.value}`).toString()}
  })
    .then((response) => {
      console.log(response);
      getGarage();
    }).catch((err) => {
      console.log(err);
  })};

  DOM.CarCreate.onclick = () => {createcar();}
      const nameToGarage = (str) => {
        console.log(str)
        axios.get(`http://localhost:8080/garage/read`)
        .then((response) => {
          for (const i of response.data) {      
            console.log(i);
             if(i.name == str) {
                passById = i.id;
             }
          }
          console.log(passById);
      }).catch((err) => {
          console.log(err);
        });
      return passById;}


  // let passById;
  // const createcar = () => {
  //   axios.post(`http://localhost:8080/car/create`,
  //       {
  //         "name": `${DOM.carNameCreate.value}`,
  //         "colour":`${DOM.carColourCreate.value}`,
  //         "make": `${DOM.carMakeCreate.value}`,
  //         "model": `${DOM.carModelCreate.value}`,
  //         "doors": `${DOM.carDoorCreate.value}`,
  //         "garage": {"id" : nameToGarage(`${DOM.carGarageCreate.value}`).toString()}
  //       })
  //       .then((response) => {
  //           console.log(response);
  //           // getGarage();
  //       }).catch((err) => {
  //           console.log(err);
  //   })};
  //   DOM.buttonCarCreate.onclick = () => {createcar();}
  //     const nameToGarage = (str) => {
  //       console.log(str)
  //       axios.get(`http://localhost:8080/garage/read`)
  //       .then((response) => {
  //         for (const i of response.data) {      
  //           console.log(i);
  //            if(i.name == str) {
  //               passById = i.id;
  //            }
  //         }
  //         console.log(passById);
  //     }).catch((err) => {
  //         console.log(err);
  //       });
  //     return passById;}













  // const createcar = () => {
  //   axios.post(`http://localhost:8080/car/create`,
  //       {
  //         "name": `${DOM.CarNameCreate.value}`,
  //         "colour":`${DOM.CarColourCreate.value}`,
  //         "make": `${DOM.CarMakeCreate.value}`,
  //         "model": `${DOM.CarModelCreate.value}`,
  //         "doors": `${DOM.CarDoorCreate.value}`,
  //       })
      
  //       .then((response) => {
  //           console.log(response);
  //           getGarage();
  //       }).catch((err) => {
  //           console.log(err);
  //   })};
  //   DOM.CarCreate.onclick = () => { console.log(DOM.CarColourCreate.value.toString(),DOM.CarDoorCreate.value,DOM.CarMakeCreate.value, DOM.CarModelCreate.value, DOM.CarNameCreate.value,DOM.CarGarageCreate.value);
  //     createcar();}


















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

const carFindByName = () => {

  DOM.carOutput.innerHTML = ``;

  axios.get(`http://localhost:8080/car/findByName/${DOM.getCarByName.value}`)
    .then((response) => {
      console.log(response);
      DOM.carOutput.innerHTML = `${JSON.stringify(response.data)}`;
    }).catch((err) => {
      console.log(err);
    });
}