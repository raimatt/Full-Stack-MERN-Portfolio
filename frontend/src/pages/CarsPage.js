import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";

import CarsList from '../components/CarsList';
import { Link } from 'react-router-dom';

function CarsPage({ setCar }) {
    const redirect = useNavigate();

    const [cars, setCars] = useState([]);

    // RETRIEVE the entire list of cars
    const loadCars = async () => {
        const response = await fetch('/cars');
        const cars = await response.json();
        setCars(cars);
    } 
    

    // UPDATE a single car
    const onEditCar = async (car) => {
        setCar(car);
        redirect("/update");
    }


    // DELETE a single car  
    const onDeleteCar = async _id => {
        const response = await fetch(`/cars/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/cars');
            const cars = await getResponse.json();
            setCars(cars);
        } else {
            console.error(`Failed to delete car with ID: ${_id}, Status Code = ${response.status}`)
        }
    }

    // LOAD all the cars
    useEffect(() => {
        loadCars();
    }, []);

    // DISPLAY the cars
    return (
        <>
            <h2>List of Cars</h2>
            <p class='carP'>
                This page allows you to view a list of cars currently in our inventory. 
                You can browse through the details of each car, including its make, model, 
                year, and date purchased. If you need to make changes to any car's information, 
                simply click the "Edit" button next to the car. To remove a car from the inventory, 
                use the "Delete" button. If you want to add a new car to our collection, click the 
                "Add Car" button below.
            </p>
            <button class='addCar'><Link to="/create">Add Car<i><MdOutlineAddCircle /></i></Link></button>
            <CarsList 
                cars={cars} 
                onEdit={onEditCar}
                onDelete={onDeleteCar} 
            />
        </>
    );
}

export default CarsPage;