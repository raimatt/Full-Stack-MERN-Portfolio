// Models for the Cars Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to the database. Please check the connection settings and try again.' });
    } else  {
        console.log('Success: Database connection established successfully. You can now proceed with database operations.');
    }
});

// SCHEMA: Define the collection's schema.
const carSchema = mongoose.Schema({
    make: { type: String, required: true},
	model:    { type: String, required: true },
	year:     { type: Number, required: true },
	datePurchased: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "cars".
const cars = mongoose.model('Cars', carSchema);


// CREATE model *****************************************
const createCar = async (make, model, year, datePurchased) => {
    const car = new cars({ 
        make: make, 
        model: model, 
        year: year,
        datePurchased: datePurchased 
    });
    return car.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveCars = async () => {
    const query = cars.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveCarsByID = async (_id) => {
    const query = cars.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteCarsById = async (_id) => {
    const result = await cars.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateCar = async (_id, make, model, year, datePurchased) => {
    const result = await cars.replaceOne({_id: _id }, {
        make: make, 
        model: model, 
        year: year,
        datePurchased: datePurchased 
    });
    return { 
        _id: _id, 
        make: make, 
        model: model, 
        year: year,
        datePurchased: datePurchased
    }
}

// EXPORT the variables for use in the controller file.
export { createCar, retrieveCars, retrieveCarsByID, updateCar, deleteCarsById }