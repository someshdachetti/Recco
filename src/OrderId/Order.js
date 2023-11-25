//import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './Order.css'

const OrderId = () =>{
    return (
        <>
        <div className='Order-id-Container'>
            <div className='order-id'>
                <h1 className='Order-name'>Order</h1>
                <img className='chevron-right' src="https://i.ibb.co/rdrDmN0/Screenshot-2023-11-25-215222.png" alt="Chevron-right"/>
                <p className='Order'>Order 32457ABC</p>
            </div>
            <div className='order-cnfm-container'>
                <h1 className='order-324'>Order 32457ABC</h1>
                <div className='Approved-button-container'>
                    <button className='back-button'>Back</button>
                    <button className='Approved-button'>Approved Order</button>

                </div>

            </div>
        </div>
        </>
    )
}
export default OrderId