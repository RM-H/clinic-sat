import {Outlet} from 'react-router-dom'
import {Nav} from '../components'

const Mainlayout = () => {
    return (

        <div  style={{ minHeight:'100vh'}}>

            <Nav/>
            <Outlet/>
        </div>
    )
}
export default Mainlayout