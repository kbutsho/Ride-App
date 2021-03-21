import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../FakeData/FakeData.json';
import './Destination.css';
import MapArea from '../MapArea/MapArea';


const Destination = (props) => {
    const { rideType } = useParams();
    const ride = fakeData.find(pd => pd.RideName === rideType);

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

    const [showImg, setShowImg] = useState();
    const [showPrice, setShowPrice] = useState();
    const [showNumber, setShowNumber] = useState();

    let setRideImg;
    let setRidePrice;
    let rideNum;

    if (ride.RideName === "BIKE") {
        setRideImg = <img src={ride.image} alt="" />
        rideNum = <p>{ride.number}</p>
        setRidePrice = <p>{ride.Price}</p>
    }
    if (ride.RideName === "BUS") {
        setRideImg = <img src={ride.image} alt="" />
        rideNum = <p>{ride.number}</p>
        setRidePrice = <p>{ride.Price}</p>
    }
    if (ride.RideName === "TRAIN") {
        setRideImg = <img src={ride.image} alt="" />
        rideNum = <p>{ride.number}</p>
        setRidePrice = <p>{ride.Price}</p>
    }
    if (ride.RideName === "CAR") {
        setRideImg = <img src={ride.image} alt="" />
        rideNum = <p>{ride.number}</p>
        setRidePrice = <p>{ride.Price}</p>
    }
    const button = () => {
        setShowImg(setRideImg);
        setShowPrice(setRidePrice);
        setShowNumber(rideNum);
    }
    return (
        <div className="container my-4 ">
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
                                <label for="to">Pick To</label>
                                <input type="text" className="form-control" onBlur={handelChangeTo} name="To :" placeholder="Khulna" id="to" required />
                            </div>
                            <div className="form-group">
                                <label for="time">Pick Date</label>
                                <input type="date" id="time" className="form-control" name="Date"></input>
                            </div>
                        </form>
                        <button onClick={button} className="btn btn-danger w-100">Search</button>
                    </div>
                    <div className="from-to bg-danger mt-3">
                        <h4 className="text-white text-center font-weight-bold">Destination : </h4>
                        <p className=" text-white h5 pb-3  text-center">{fromName} {From} {toName} {To}</p>
                    </div>

                    <div className="dynamicImg-area text-center row mt-3 mx-1 p-3">
                        <div className="col-md-12">
                            <h4 className="text-center font-weight-bold text-white">Available {ride.RideName}</h4>
                        </div>
                        <div className="col-md-12 ride">
                            <div className="row">
                                <div className="col-4 item">{showImg}</div>
                                <div className="col-4 item">{showNumber}</div>
                                <div className="col-4 item">{showPrice}</div>
                            </div>
                        </div>
                        <div className="col-md-12 ride">
                            <div className="row">
                                <div className="col-4 item">{showImg}</div>
                                <div className="col-4 item">{showNumber}</div>
                                <div className="col-4 item">{showPrice}</div>
                            </div>
                        </div>
                        <div className="col-md-12 ride">
                            <div className="row">
                                <div className="col-4 item">{showImg}</div>
                                <div className="col-4 item">{showNumber}</div>
                                <div className="col-4 item">{showPrice}</div>
                            </div>
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
