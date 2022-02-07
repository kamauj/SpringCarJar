`use strict`;

import * as DOM from  './dom.js';

// const writeCar = item => {
//     const child = document.createElement(`li`);
//     child.id = item._id;
//     child.innerHTML = `${JSON.stringify(item)}`;
//     DOM.carOutput.appendchild(child);
//

// const get = () => {
//     DOM.carOutput.innerHTML = ``;
  
//     axios.get(`http://localhost:8080/car/read`)
//       .then((response) => {
//         if (!Array.isArray(response.data)) {
//           writeCar(response.data);
//         } else {
//           for (let item of response.data) {
//             writeCar(item);
//           }
//         }
//       }).catch((err) => {
//         console.log(err);
//       });
//   }

  const post = () => {
    axios.post(`http://localhost:8080/car/create`, {name : DOM.CarID})
      .then((response) => {
        console.log(response);
        get();
      }).catch((err) => {
        console.log(err);
      });

    }
  
  
  
  




//   const createcar = () => {
//     axios.post(`http://localhost:8080/car/create`,
//         {
//           "id": `${DOM.CarID.value}`,
//           "name": `${DOM.CarNameCreate.value}`,
//           "colour":`${DOM.CarColourCreate.value}`,
//           "make": `${DOM.CarMakeCreate.value}`,
//           "model": `${DOM.CarModelCreate.value}`,
//           "doors": `${DOM.CarDoorCreate.value}`
//         }
      
//         .then((response) => {
//             console.log(response);
//             getGarage();
//         }).catch((err) => {
//             console.log(err);
//     }));
//     
    // const createcar = () => {
    //     axios.post(`http://localhost:8080/car/create`, `${DOM.CarID}`)
    //     .then ((response)=> {
    //         console.log (response);
    //         get();
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    DOM.CarCreate.onclick = () => post()