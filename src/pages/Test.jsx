import React from 'react';
import useSound from 'use-sound'
import mySound from '../sound/Fashion Show.wav'
import { FaMusic } from 'react-icons/fa';


function Test() {
    const [play, { stop }] = useSound(mySound);

    return (
        <a className='' onClick={() => play()} onCLick={() => stop()}>
            <span className='bg-green-300' role="img" aria-label="trumpet" >
                <FaMusic className='h-5 w-screen text-blue-800' />
            </span>
        </a>

    )
}

export default Test;