import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { MdEditSquare } from "react-icons/md";

export const EditCarPageTable = ({ carToEdit }) => {
    const [make, setMake] = useState(carToEdit ? carToEdit.make : '');
    const [model, setModel] = useState(carToEdit ? carToEdit.model : '');
    const [year, setYear] = useState(carToEdit ? carToEdit.year : '');
    const [datePurchased, setDate] = useState(carToEdit ? carToEdit.datePurchased: '');

    const redirect = useNavigate();

    const editCar = async () => {
        const response = await fetch(`/cars/${carToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                make: make,
                model: model,
                year: year,
                datePuchased: datePurchased
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Car edited successfully!`);
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit the car. Status: ${response.status}. Error: ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a Car<i><MdEditSquare /></i></h2>
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
                            placeholder="Make of Car"
                            value={make}
                            onChange={e => setMake(e.target.value)} 
                            id="make" />
                    </td>

                    <td><label for="model"></label>
                        <input
                            type="text"
                            value={model}
                            placeholder="Model of Car"
                            onChange={e => setModel(e.target.value)} 
                            id="model" />
                    </td>

                    <td><label for="year"></label>
                        <input
                            type="number"
                            placeholder="Year"
                            value={year}
                            onChange={e => setYear(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label for="datePurchased"></label>
                        <input
                            type="date"
                            placeholder="Date Purchased"
                            value={datePurchased}
                            onChange={e => setDate(e.target.value)} 
                            id="datePurchased" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editCar}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditCarPageTable;