// Locations.js
import React from 'react';
import Navbar from '../Components/Navbar';


const Locations = () => {
    const topCities = [
        'Mumbai',
        'Delhi',
        'Bangalore',
        'Hyderabad',
        'Ahmedabad',
        'Chennai',
        'Kolkata',
        'Pune',
        'Jaipur',
        'Surat',
        'Lucknow',
        'Kanpur',
        'Nagpur',
        'Indore',
        'Thane',
        'Bhopal',
        'Visakhapatnam',
        'Pimpri-Chinchwad',
        'Patna',
        'Vadodara'
    ];

    return (
        <div className='locations-container'>
            <Navbar />
            <div>
                <h1 className='locations-heading'>We Serve in These Locations</h1>
                <ul className='city-list'>
                    {topCities.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Locations;
