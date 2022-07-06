import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/data.js'

function DrinkPage() {

    const { id } = useParams();
    const item = data.find(item => item.id === id);

    return (
        <>
            <a href="/" className=''>
                <div className={`selection bg-drink-${id} flex flex-col justify-end bg-no-repeat bg-center bg-cover relative`}>
                    {/* <img alt="ingredients of the drinks" src={require(`../img/drinks/name.png`)} className='drink-title' /> */}
                    <div className=''>
                        <div className="flex items-center flex-col">
                            <img alt="ingredients of the drinks" src={require(`../img/ingredients/${id}.png`)} className='ingredients' />
                        </div>
                    </div>
                    <img alt="ingredients of the drinks" src={require(`../img/activando.png`)} className='pulse' />
                </div>
            </a>
        </>

    )

}

export default DrinkPage