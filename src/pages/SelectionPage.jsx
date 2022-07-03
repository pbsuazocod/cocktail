import React from 'react'
import Footer from '../components/Footer'
import data from '../data/data.js'
import { Link } from 'react-router-dom'

function SelectionPage() {

    return (
        <div className='flex flex-col items-center h-screen justify-between'>
            <div className="secondTitle mt-20 ">
                <img src={require(`../img/title2.png`)} className='w-full h-28' />
            </div>
            <div className='flex items-center font-bold'>
                <h1 className='mb-6 mr-2'>TOCA SOBRE </h1>
                <a href="/selection">
                    <img src={require(`../img/buttom1.png`)} className='h-20' />
                </a>
                <h1 className='mb-6 ml-2'>EL NOMBRE</h1>
            </div>
            <div className="drinkSelection grid grid-cols-2 gap-12">
                {data.map((drinkName) => {
                    return (
                        <article key={drinkName.id}>
                            <Link to={`/drink/${drinkName.id}`}>
                                <img src={require(`../img/${drinkName.imagePath}.png`)} className='w-full h-20' />
                            </Link>
                        </article>
                    )
                })}
            </div>
            <div className="PromotionName mt-10">
                <img src={require(`../img/logo.png`)} className='w-full h-6' />
            </div>
            <Footer />
        </div>
    )
}

export default SelectionPage