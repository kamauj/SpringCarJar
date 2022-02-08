`use strict`;

import * as DOM from  './dom.js';

const writeItem = item => {
    const child = document.createElement(`li`);
    child.id = item._id;
    child.innerHTML = `${JSON.stringify(item)}`;
    DOM.carOutput.appendchild(child);
}


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

  // const post = () => {
  //   axios.post(`http://localhost:8080/car/create`, {name : DOM.CarID})
  //     .then((response) => {
  //       console.log(response);
  //       get();
  //     }).catch((err) => {
  //       console.log(err);
  //     });

  //   }
  
  //   const carCreate = () => {
  //     axios.post(`http://localhost:8080/car/create`, {
  //         name : "Audi",
  //         colour : "White",
  //         make : "n/a",
  //         model : "A6",
  //         doors : 5
  //     }).then((response) => {
  //         console.log(response);
  //         getGarage();
  //     }).catch((err) => {console.log(err);})}
  
  
  




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
    


      const PutCar = () => {
        DOM.CarOutput.innerHTML = ``;
    
        axios.put(`http://localhost:8080/car/update/${DOM.CarId.value}`, 
            {
            "name" : `${DOM.CarNameUpdate.value}`, 
            "model" : `${DOM.CarModelUpdate.value}`, 
            "make" : `${DOM.CarMakeUpdate.value}`, 
            "colour" : `${DOM.CarColourUpdate.value}`, 
            "doors" : `${DOM.CarDoorUpdate.value}`, 
            "garage" : `${DOM.CarGarageUpdate.value}`
            })
    
            .then((response) => {
                console.log(response);
                ReadCar();
                DOM.CarNameUpdate.value = ``;
                DOM.CarMakeUpdate.value = ``;
                DOM.CarModelUpdate.value = ``;
                DOM.CarColourUpdate.value = ``;
                DOM.CarDoorUpdate.value = ``;
                DOM.CarGarageUpdate.value =``;
            }).catch((err) => {
                console.log(err);
            });
    }
    DOM.UpdateCar.onclick = () => PutCar();

    //Delete (DELETE)
const DeleteCar = () => {


  axios.delete(`http://localhost:8080/car/delete/${DOM.DeleteCarId.value}`)
      .then((response) => {
          console.log(response);
          DOM.DeleteCarId.value = ``;
          ReadCar();
      }) .catch((err) => {
          console.log(err);
        });
}
DOM.DeleteCar.onclick = () => DeleteCar();
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      //Read (GET)
      
          // const ReadCar = () => {
          // DOM.CarOutput.innerHTML = ``;
          //   axios.get(`http://localhost:8080/car/read`)
          //   .then((response) => {
          //   if (!Array.isArray(response.data)) {
          //   writeItem(response.data);
          //   } else {
          //   for (let item of response.data) {
          //   writeItem(item); 
          //   }
          //    }
          //   }).catch((err) => {
          //   console.log(err);
          //   });
          //    }
          //    DOM.CarSearch.onclick = () => ReadCar()
    



   
//     
    // const createcar = () => {
    //     axios.post(`http://localhost:8080/car/create`, `${DOM.CarID}`)
    //     .then ((response)=> {
    //         console.log (response);
    //         get();
    //     }).catch((err)=>{
    //         console.log(err);