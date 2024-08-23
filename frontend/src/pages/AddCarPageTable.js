import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";

export const AddCarPageTable = () => {

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [datePurchased, setDate] = useState(new Date().toISOString().split('T')[0])    
    const redirect = useNavigate();

    const addCar = async () => {
        const newCar = { make, model, year, datePurchased };
        const response = await fetch('/cars', {
            method: 'post',
            body: JSON.stringify(newCar),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert('Car added successfully!');
        } else {
            alert(`Failed to add the car. Status: ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a Car<i><MdOutlineAddCircle /></i></h2>
            <p>Paragraph about this page.</p>
            
            <table id="cars">
                <caption>Which car are you adding?</caption>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Date Purchased</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="make"></label>
                        <input
                            type="text"
                            placeholder="e.g. Toyota"
                            value={make}
                            onChange={e => setMake(e.target.value)} 
                            id="make" />
                    </td>

                    <td><label for="model"></label>
                        <input
                            type="text"
                            value={model}
                            placeholder="e.g. Corolla"
                            onChange={e => setModel(e.target.value)} 
                            id="model" />
                    </td>

                    <td><label for="year"></label>
                        <input
                            type="number"
                            placeholder="e.g. 2020"
                            value={year}
                            onChange={e => setYear(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label for="datePurchased"></label>
                        <input
                            type="date"
                            placeholder="mm/dd/yyyy"
                            value={datePurchased}
                            onChange={e => setDate(e.target.value)} 
                            id="datePurchased" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addCar}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddCarPageTable;