import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data.js'


function DrinkPage() {

    const { id } = useParams();
    const item = data.find(item => item.id === id);


    return (
        <div className='flex flex-col h-screen justify-between items-center'>
            <div className="DrinkTitle mt-20">
                <img src={require(`../img/${item.imagePath}.png`)} className='w-full h-40' />
            </div>
            <img src={require(`../img/${item.imagePath}2.png`)} className='h-80' />
            <div className="ingredients flex">
                <img src={require(`../img/${item.imagePath}3.png`)} className='w-full h-36' />
            </div>
            <img src={require(`../img/title3.png`)} className='h-14 mb-10' />
            {/* <a href="/">Homepage</a> */}
        </div>
    )
}

export default DrinkPage