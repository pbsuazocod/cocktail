import React from 'react';
import useSound from 'use-sound'
import mySound from '../sound/Fashion Show.wav'


function Test() {
    const [play, { stop }] = useSound(mySound);

    return (
        <a onMouseEnter={() => play()} onMouseLeave={() => stop()}>
            <span role="img" aria-label="trumpet">
                🎺
            </span>
        </a>

    )
}

export default Test;