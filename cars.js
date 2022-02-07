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

// const carCreate = () => {
//   axios.post(`http://localhost:8080/car/create`, {name : DOM.carName.value, garage : DOM.garageID.value})
//     .then((response) => {
//       console.log(response);
//       getGarage();
//     }).catch((err) => {
//       console.log(err);
//     });
// }


// delete (delete)
app.delete('/delete/:id', (req,res) => {
    console.log(`\nUpdate - PUT`);
    //deleting item in our DB
    db.remove({ _id: req.params.id }, (err, item) => {
      // if there is an error, send back the error
      if (err) res.send(err);
      // otherwise 200 - Deleted the item (JSON)
      res.status(200).send(`${JSON.stringify(item)}`);
      // log it to console
      console.log(`Deleted item: ${JSON.stringify(item)}`)
    });
  });


// update (put)
app.put('/update/:id', (req,res) => {
    console.log(`\nUpdate - PUT`);
    // update an item from the data in the request body
    let itemUpdate = { name : req.body.name, _id: req.params.id};
  
    //updating item in our DB
    db.update({ _id: req.params.id }, itemUpdate, (err, item) => {
      // if there is an error, send back the error
      if (err) res.send(err);
      // otherwise 200 - Updated the item (JSON)
      res.status(200).send(`${JSON.stringify(item)}`);
      // log it to console
      console.log(`Updated item: ${JSON.stringify(item)}`)
    });
  });

//GET  function to read just one item from DB - passing in ID
const put = () => {
    DOM.listOutput.innerHTML = ``; //clearing list - want it to be empty so we can populate it, avoids repeated ID
    axios.put(`/update/${DOM.inputName.value}`) //read is the end point we specified
        .then((response) => {
            //if not getting an array then run response.data
            if (!Array.isArray(response.data)) { //if we are not getting an array that is an array then write data
                writeItem(response.data);
            } else {
                //enhanced for loop is we are getting an array, read data for any item in array
                for (let item of response.data) {
                    writeItem(item);
                }
            }
            //catch our errors
        }).catch((err) => {
            console.log(err);
        });
};


// read (get)
app.get('/read', (req,res) => {
    console.log(`\nRead - GET`);
    // get all data from the database
    db.find({}, (err, items) => {
      // if there is an error, send back the error
      if (err) res.send(err);
      // otherwise send back the items
      res.status(200).send(items);
      // log the items being returned
      console.log(`Reading items: ${JSON.stringify(items)}`);
    });
  });

//GET  function to read just one item from DB - passing in ID
const get = () => {
    DOM.listOutput.innerHTML = ``; //clearing list - want it to be empty so we can populate it, avoids repeated ID
    axios.get(`/read/${DOM.inputName.value}`) //read is the end point we specified
        .then((response) => {
            //if not getting an array then run response.data
            if (!Array.isArray(response.data)) { //if we are not getting an array that is an array then write data
                writeItem(response.data);
            } else {
                //enhanced for loop is we are getting an array, read data for any item in array
                for (let item of response.data) {
                    writeItem(item);
                }
            }
            //catch our errors
        }).catch((err) => {
            console.log(err);
        });
};
