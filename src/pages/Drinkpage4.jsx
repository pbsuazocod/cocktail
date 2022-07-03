import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data.js'


function DrinkPage() {

    const { id } = useParams();
    const item = data.find(item => item.id === id);


    return (
        <div className=''>
            <div className="">
                <img src={require(`../img/drinks/${item.imagePath}.png`)} className='' />
            </div>
        </div>
    )
}

export default DrinkPage