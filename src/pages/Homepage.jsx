import React from 'react'
import Footer from "../components/Footer"
import useSound from 'use-sound'
import mySound from '../sound/Fashion Show.wav'
import { GiSpeaker } from 'react-icons/gi';


function Homepage() {


    const [play, { stop }] = useSound(mySound);


    return (
        <div className={`bg-homescreen relative selection bg-no-repeat bg-center bg-cover flex flex-col`}>

            <a className=' music' onClick={() => play()} onCLick={() => stop()}>
                <span className='bg-green-300' role="img" aria-label="trumpet" >
                    <GiSpeaker className='speaker w-screen' />
                </span>
            </a>

            <div className="flex-1"></div>


            <a alt='select your drink' href="/selection" className='selection-bottom'>
                <img alt='Selected cocktail' src={require(`../img/buttom.png`)} className='bottom-selection-img' />
            </a>




            <Footer />
        </div>
    )
}

export default Homepage