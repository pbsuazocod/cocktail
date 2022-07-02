import React from 'react'
import testButtom from '../img/TestButtom.jpg'
import Footer from "../components/Footer"


function Hompage() {
    return (
        <div className="flex flex-col items-center h-screen justify-between">
            <div className="PromotionName mt-20 bg-red-300">
                <h1 className=" text-8xl">Activar</h1>
            </div>
            <div className="MainTitle flex flex-col items-center text-6xl mb-20 bg-green-50">
                <span>The</span>
                <span>Wow</span>
                <span>Drink</span>
                <span>Experience</span>
            </div>
            <div className="touchButtom flex flex-col items-center bg-gray-300">
                <button type="button"> <img src={testButtom} height="80" width="100" />Toca Iniciar Tu Experiencia</button>
                touchButtom
            </div>
            <Footer />
        </div>
    )
}

export default Hompage