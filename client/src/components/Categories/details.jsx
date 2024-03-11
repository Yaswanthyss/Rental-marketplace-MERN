import React from 'react';
import "./detail.css";
import { useParams } from 'react-router-dom';

function CarDetails() {
    // Accessing URL parameters
    const { imageName } = useParams();

    // Depending on the imageName, render the corresponding image and text
    let imageSrc, title, location;

    // Switch statement to set imageSrc, title, and location based on the imageName
    switch (imageName) {
        case 'h1':
            imageSrc = require('./Img3.avif').default;
            title = "Xiomi's XUV7";
            location = "Mumbai, India";
            break;
        case 'h2':
            imageSrc = require('./Img9.jpg').default;
            title = "BMW 3 Series";
            location = "Mumbai, India";
            break;
        // Add cases for other imageNames as needed

        default:
            // Handle default case
            break;
    }

    return (
        <div className="rentingbox">
            {/* <img src={imageSrc} alt="Car" /> */}
            <h1>{title}</h1>
            <p>{location}</p>
            {/* Add more details if needed */}
        </div>
    );
}

export default CarDetails;
