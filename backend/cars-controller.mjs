// Controllers for the Car Collection

import 'dotenv/config';
import express from 'express';
import * as cars from './cars-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/cars', (req,res) => { 
    cars.createCar(
        req.body.make, 
        req.body.model, 
        req.body.year,
        req.body.datePurchased
        )
        .then(car => {
            console.log(`"${car.make}" was added to the collection.`);
            res.status(201).json(car);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to create a new car entry. Please check the data and try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/cars', (req, res) => {
    cars.retrieveCars()
        .then(cars => { 
            if (cars !== null) {
                console.log(`All cars were retrieved from the collection.`);
                res.json(cars);
            } else {
                res.status(404).json({ Error: 'No cars found in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve cars from the database. Please try again later.' });
        });
});


// RETRIEVE by ID controller
app.get('/cars/:_id', (req, res) => {
    cars.retrieveCarsByID(req.params._id)
    .then(car => { 
        if (car !== null) {
            console.log(`"${car.make}" was retrieved, based on its ID.`);
            res.json(car);
        } else {
            res.status(404).json({ Error: 'No car found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve the car from the database. Please try again later.' });
    });

});


// UPDATE controller ************************************
app.put('/cars/:_id', (req, res) => {
    cars.updateCar(
        req.params._id, 
        req.body.make, 
        req.body.model, 
        req.body.year,
        req.body.datePurchased
    )
    .then(car => {
        console.log(`"${car.make}" was updated.`);
        res.json(car);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update the car. Please try again later.' });
    });
});


// DELETE Controller ******************************
app.delete('/cars/:_id', (req, res) => {
    cars.deleteCarsById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} movie was deleted.`);
                res.status(200).send({ Success: 'Car deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'No car found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete the car. Please try again later.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});