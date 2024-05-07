import {Outlet} from 'react-router-dom'
import {Nav , Footer} from '../components'

const Mainlayout = () => {
    return (
        <>


        <div className='container '  style={{ minHeight:'100vh'}}>

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