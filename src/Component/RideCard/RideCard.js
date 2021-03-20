import React from 'react';
import { useHistory } from 'react-router';
import './RideCard.css';

const RideCard = (props) => {
    const history = useHistory();
    const handelClick = (rideName) => {
        const url = `/destination/${rideName}`;
        history.push(url);
    }
    const { RideName, image } = props.ride;
    return (
        <div className=" mx-auto">
            <div className="col-lg-3 col-md-4 col-sm-6 my-5 col-12 text-center" onClick={() => handelClick(RideName)}>
                <div className="card-area">
                    <img src={image} className="mt-5" alt="" />
                    <h3>{RideName}</h3>
                </div>
            </div>
        </div>
    );
};

export default RideCard;