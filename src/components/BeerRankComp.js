import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

const BeerDetailComp = (stars) => {

    const upFev = useSelector(state => state.upFev);    // pull beer id and starts
    
    useEffect(() => {
        console.log(stars.beerStars );
    },[]);

    return (
        
        <select id="cars" name="cars">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    );
}

export default BeerDetailComp;