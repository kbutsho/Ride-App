import React from 'react';
import { Link } from 'react-router-dom';

const Warning = () => {
    return (
        <div className="text-center">
            <h1>Please Select Your Ride</h1>
            <Link to="/home"><button className="btn btn-primary btn-sm mb-4">GO Home</button></Link>
        </div>
    );
};

export default Warning;