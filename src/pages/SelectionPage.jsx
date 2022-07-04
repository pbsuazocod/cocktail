import React from 'react'
import Footer from '../components/Footer'
import data from '../data/data.js'
import { Link } from 'react-router-dom'

function SelectionPage() {

    return (
        <div className={`bg-selection selection bg-no-repeat bg-center flex flex-col`}>
            <div className='flex-1'></div>
            <div className="promotions flex-1 grid grid-cols-2 gap-8 items-center align-middle mb-16">
                {data.map((drinkName) => {
                    return (
                        <article key={drinkName.id} >
                            <Link to={`/drink/${drinkName.id}`} className="items-center flex flex-col ">
                                <img src={require(`../img/${drinkName.imagePath}.png`)} className='logos' />
                            </Link>
                        </article>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default SelectionPage