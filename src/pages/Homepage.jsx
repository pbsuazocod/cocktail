import React from 'react'
import Footer from "../components/Footer"
import useSound from 'use-sound'
import mySound from '../sound/Fashion Show.wav'
import { GiSpeaker } from 'react-icons/gi';
import { useState } from 'react';


function Homepage() {


    const [play, { stop }] = useSound(mySound);
    const [soundState, setsoundState] = useState("stop")



    return (
        <div className={`bg-homescreen relative selection bg-no-repeat bg-center bg-cover flex flex-col items-center justify-between`}>

            <a className='music' onClick={() => {
                if (soundState === "stop") {
                    play()
                    setsoundState("play")
                } else {
                    stop()
                    setsoundState("stop")
                }
            }}>
                <span className='bg-green-300' role="img" aria-label="trumpet" >
                    <GiSpeaker className='speaker ' />
                </span>
            </a>

            <a alt='select your drink' href="/selection" className='selection-bottom'>
                <img alt='Selected cocktail' src={require(`../img/buttom.png`)} className='bottom-selection-img' />
            </a>

            <Footer />
        </div>
    )
}

export default Homepage