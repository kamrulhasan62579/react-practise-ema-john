import React from 'react';
import './SingleAnimal.css'

const SingleAnimal = (props) => {
    const {name, forest, image, ip_address, number} = props.animal;
    return (
        <div className="single-animal">
            <h4>Name: {name}</h4>
            <img src={image} alt=""/>
            <p><small>Forest: {forest}</small></p>
            <p><small>IP Address: {ip_address}</small></p>
            <p><small>Animal Weight: {number}</small></p>
            <button onClick={() =>props.handleBuyAnimal(props.animal)} className="btn">Buy This Animal</button>

        </div>
    );
};

export default SingleAnimal;