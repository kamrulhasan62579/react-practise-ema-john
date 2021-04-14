import React, { useEffect, useState } from 'react';
import './Animal.css'
import fakeData from '../../fakeData/data.json'
import SingleAnimal from '../SingleAnimal/SingleAnimal';
import Buy from '../Buy/Buy';

const Animal = () => {
    const [animals, setAnimals] = useState([])
    useEffect(() => {
        setAnimals(fakeData)
    }, [])
    const [buy, setBuy] = useState([])
    
    const handleBuyAnimal = (animal) =>{
        const newBuy = [...buy, animal];
        setBuy(newBuy)
    }
    return (
        <div>
            <Buy buy={buy}></Buy>
            {
                animals.map(animal => <SingleAnimal key={animal.id} handleBuyAnimal={handleBuyAnimal} animal={animal}></SingleAnimal> )
            }
        </div>
    );
};

export default Animal;