import {Outlet} from 'react-router-dom'
import {Nav , Footer} from '../components'
import {useEffect, useState} from "react";

const Mainlayout = () => {



    useEffect(() => {
        const audio = new Audio('/assets/music/music.mp3')

        document.getElementById('main').addEventListener('pointermove',()=>audio.play())





    }, [])



    return (
        <>


        <div className='container ' id='main'  style={{ minHeight:'100vh'}}>

            <Nav/>
            <main>
                <Outlet/>
            </main>


        </div>
    <Footer/>


        </>
    )
}
export default Mainlayout