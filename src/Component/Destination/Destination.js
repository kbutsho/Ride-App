import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../FakeData/FakeData.json';
import bike from '../images/Frame.png';
import car from '../images/Frame-2.png';
import train from '../images/Group.png';
import bus from '../images/Frame-1.png';

const Destination = (props) => {

    const { rideType } = useParams();
    const ride = fakeData.find(pd => pd.RideName === rideType);

    const [From, setFrom] = useState();
    const [To, setTo] = useState();


    const handelChangeFrom = (e) => {
        setFrom(e.target.value);
    }
    const handelChangeTo = (e) => {
        setTo(e.target.value);
    }
    const handelSearch = () => {
        console.log("clicked");

    }
    let setGender;
    if (ride.RideName === "BIKE") {
        setGender = <img src={bike} alt="" />
    }
    else if (ride.RideName === "BUS") {
        setGender = <img src={bus} alt="" />
    }
    else if (ride.RideName === "TRAIN") {
        setGender = <img src={train} alt="" />
    }
    else {
        setGender = <img src={car} alt="" />
    }


    return (
        <div>
            <h3>this is destination route</h3>
            <h3>Selected Ride : {ride.RideName}</h3>



            <form onSubmit="">
                <input type="text" onBlur={handelChangeFrom} name="From" placeholder="Dhaka" required />
                <br />
                <input type="text" onBlur={handelChangeTo} name="To" placeholder="Khulna" required />
                <br />
                <input type="submit" value="Search" onClick={handelSearch} />
            </form>

            <p>From : {From}</p>
            <p>To : {To}</p>
            {
                setGender
            }
            {
                setGender
            }
            {
                setGender
            }







        </div>
    );
};

export default Destination;