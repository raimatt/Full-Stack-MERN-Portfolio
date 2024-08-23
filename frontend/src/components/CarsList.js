import React from 'react';
import Cars from './Cars';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function CarsList({ cars, onDelete, onEdit }) {
    return (
        <table id="cars">
            <caption>Add and Edit Cars</caption>
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Date Purchased</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car, i) => 
                    <Cars 
                        car={car} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default CarsList;
