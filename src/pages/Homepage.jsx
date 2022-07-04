import React from 'react'
import Footer from "../components/Footer"

function Homepage() {
    return (
        <div className={`bg-homescreen selection bg-no-repeat bg-center bg-cover flex flex-col`}>
            <a href="/selection" className='flex-1'></a>
            <Footer />
        </div>
    )
}

export default Homepage