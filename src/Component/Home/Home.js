import React, { useEffect, useState } from 'react';
import './Home.css';
import Ride from '../FakeData/FakeData.json';
import RideCard from '../RideCard/RideCard';

const Home = () => {
    const [ride, setRide] = useState([]);
    useEffect(() => {
        setRide(Ride);
    }, []);
    return (
            
                <div className="home-area row ">
                {
                    ride.map(ride => <RideCard ride={ride}></RideCard>)
                }
            </div>
           
            
    );
};

export default Home;