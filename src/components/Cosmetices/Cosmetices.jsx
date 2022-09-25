import React, { useEffect, useState } from 'react';
import Cosmetice from '../Cosmetice/Cosmetice'
import './Cosmetices.css'
import { getTotalPrice } from '../../Utility/Calculatte'

const Cosmetices = () => {
    const [cosmetic, setCosmetic] = useState([])

    useEffect(() => {
        fetch('cosmetic.json')
            // fetch('https://cosmetice-api.free.beeceptor.com/')
            .then(res => res.json())
            .then(data => setCosmetic(data))
    }, [])

    const total = getTotalPrice(cosmetic)


    return (
        <div>
            <h1>WellCome To Cosmetice Shop</h1>
            <h3>Total Added Money {total}</h3>
            <h2>Total Product Found {cosmetic.length}</h2>
            <div className='cosmeticeContainer'>
                {
                    cosmetic.map(cosmetice => {
                        return (
                            <Cosmetice cosmetice={cosmetice} key={cosmetice.id}></Cosmetice>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Cosmetices;