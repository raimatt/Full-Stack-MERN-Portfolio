import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi2";

function HomePage() {
    return (
        <>
            <h2>Home</h2>
            <article>
                <p class='home'>
                    My career goals include becoming a proficient full-stack web developer, skilled in both frontend and backend technologies. 
                    I aim to create efficient, scalable, and user-friendly applications that solve real-world problems. I am committed to continuous 
                    learning and staying up-to-date with the latest advancements in web development.
                </p>
                <p>Technologies Used in This Website:</p>
                <ul>
                    <li><strong>Semantic HTML:</strong> For meaningful and accessible web content structure.</li>
                    <li><strong>CSS:</strong> For styling and making the site responsive and visually appealing.</li>
                    <li><strong>JavaScript:</strong> For adding interactivity and dynamic behavior to the web pages.</li>
                    <li><strong>React:</strong> For building the user interface with reusable components.</li>
                    <li><strong>React Router:</strong> For handling navigation and routing within the React application.</li>
                    <li><strong>Express:</strong> For setting up the backend server and handling API requests.</li>
                    <li><strong>MongoDB:</strong> For storing and managing data in a NoSQL database.</li>
                    <li><strong>Mongoose:</strong> For providing a schema-based solution to model application data.</li>
                    <li><strong>REST:</strong> For implementing APIs to perform CRUD operations on data.</li>
                </ul>
            </article>
        </>
    );
}

export default HomePage;