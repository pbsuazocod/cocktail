import React from 'react'
import testButtom from '../img/TestButtom.jpg'
import Footer from "../components/Footer"
import '../styles/Homepage.css';


function Homepage() {
    return (
        <div className="flex flex-col items-center h-screen justify-between">
            <div className="PromotionName mt-10">
                <img src={require(`../img/logo.png`)} className='w-full h-28' />
            </div>
            <div className="mainTitle flex flex-col items-center text-2xl mb-20 ">
                <img src={require(`../img/title.png`)} className=' h-96 ' />
                <a href="/selection">
                    <img src={require(`../img/buttom1.png`)} className='h-28' />
                </a>
                <h1>TOCA INICIAR</h1>
                <h1>TU EXPERIENCIA</h1>
            </div>
            <div className="touchButtom mb-11 flex flex-col items-center text-2xl">
            </div>
            <Footer />
        </div>
    )
}


export default Homepage