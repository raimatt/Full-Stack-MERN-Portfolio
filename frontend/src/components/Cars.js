import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditDocument } from "react-icons/md";

function Cars({ car, onEdit, onDelete }) {
    const formattedDate = new Date(car.datePurchased).toLocaleDateString('en-US');

    return (
        <tr>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{formattedDate}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin6Fill onClick={() => onDelete(car._id)} /></td>
            <td><MdEditDocument onClick={() => onEdit(car)} /></td>
        </tr>
    );
}

export default Cars;