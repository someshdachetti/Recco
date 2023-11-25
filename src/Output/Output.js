import {Component} from 'react'
import Navbar from "../NavBar/index"
import OrderId from '../OrderId/Order'
import StatusOfOrder from '../Status-of-Order/Status'
import Products from '../Products-Container/Product'
import './Output.css'

class Output extends Component {
    render(){
        return (
            <>
                <Navbar/>
                <OrderId/>
                <StatusOfOrder/>
                <Products/>
            </>
        )
    }
}
export default Output