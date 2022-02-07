`use strict`

import * as DOM from './dom.js';

DOM.UpdateCar.onclick = () => PutCar();
DOM.DeleteCar.onclick = () => DeleteCar();

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

//Delete (DELETE)
const PutCar = () => {
    DOM.CarOutput.innerHTML = ``;

    axios.delete(`http://localhost:8080/car/delete/${DOM.CarName.value}`)
        .then((response) => {
            console.log(response);
            DOM.CarOutput.innerHTML = `${JSON.stringify(response.data)}`;
        }) .catch((err) => {
            console.log(err);
          });
}

