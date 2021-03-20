import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../FakeData/FakeData.json';
import bike from '../images/Frame.png';
import car from '../images/Frame-2.png';
import train from '../images/Group.png';
import bus from '../images/Frame-1.png';
import './Destination.css';
import MapArea from '../MapArea/MapArea';


const Destination = (props) => {
    const { rideType } = useParams();
    const ride = fakeData.find(pd => pd.RideName === rideType);

    const [showImg, setShowImg] = useState();
    const [From, setFrom] = useState();
    const [fromName, setFromName] = useState();
    const [To, setTo] = useState();
    const [toName, setToName] = useState();
    const handelChangeFrom = (e) => {
        setFrom(e.target.value);
        setFromName(e.target.name);
    }
    const handelChangeTo = (e) => {
        setTo(e.target.value);
        setToName(e.target.name);
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
    const button = () => {
        setShowImg(setGender);
        console.log("clicked button");
    }
    return (
        <div className="container mt-4 ">
            <div className="row">
                <div className="col-md-4 details-area py-4 px-3">
                    <h4 className="text-center bg-success py-3 mb-3 rideName text-white font-weight-bold">Selected Ride : {ride.RideName}</h4>
                    <div className="fromArea">
                        <form onSubmit="" className="">
                            <div className="form-group">
                                <label for="from">Pick From</label>
                                <input type="text" className="form-control" onBlur={handelChangeFrom} name="From :" placeholder="Dhaka" id="from" required />
                            </div>
                            <div className="form-group">
                                <label for="to">Pick From</label>
                                <input type="text" className="form-control" onBlur={handelChangeTo} name="To :" placeholder="Khulna" id="to" required />
                            </div>
                            <div className="form-group">
                                <label for="time">Pick Date</label>
                                <input type="date" id="time" className="form-control" name="Date"></input>
                            </div>
                        </form>
                        <button onClick={button} className="btn btn-success btn-sm">Search</button>
                    </div>
                    <div className="from-to bg-danger mt-3">
                        <h4 className="text-white text-center font-weight-bold">Destination : </h4>
                        <p className=" text-white h5 pb-3  text-center">{fromName} {From} {toName} {To}</p>
                    </div>

                    <div className="dynamicImg-area text-center row mt-3 mx-1 p-3">
                        <div className="col-md-12">
                            <h3 className="text-center text-white">Available {ride.RideName}</h3>
                        </div>
                        <div className="col-md-12 ride">
                            {
                                showImg
                            }

                        </div>
                        <div className="col-md-12 ride">
                            {
                                showImg
                            }

                        </div>
                        <div className="col-md-12 ride">
                            {
                                showImg
                            }
                        </div>

                    </div>
                </div>
                <div className="col-md-8 map-area">
                    <MapArea></MapArea>
                </div>
            </div>
        </div>
    );
};

export default Destination;
