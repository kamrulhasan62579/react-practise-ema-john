import React from 'react';
import './Buy.css'

const Buy = (props) => {
    const buy = props.buy;
    const TotalWeight = buy.reduce( (TotalWeight, buy) => TotalWeight + Number(buy.number), 0)
    // let TotalWeight = 0;
    // for (let i = 0; i < buy.length; i++) {
    //     const animal = buy[i];
    //     TotalWeight = TotalWeight + Number(animal.number) ;
        
    // }
    return (
        <div className="Animal-detail">
            <h1>Animal Added: {buy.length}</h1>
            <p>Total Animal Added: {TotalWeight}</p>
        </div>
    );
};

export default Buy;