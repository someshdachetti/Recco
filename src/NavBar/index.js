import {faAngleDown,  faCartShopping,} from '@fortawesome/free-solid-svg-icons';

import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () =>{
    return(
        <>
        <nav className='navbar-container'>

              <div className='logo-container'>
                <h1 className='logo-name'>Recco</h1>
                <p className='store'>Store</p>
                <p className='store'>Order</p>
                <p className='store'>Analytic</p>
            </div>

            <div className='cart-container'>
                <FontAwesomeIcon className='Cart' icon={faCartShopping}/><p className='count-cart'>10</p>
                <p className='store'>Hello , <span className='ac-holder'>James</span> <FontAwesomeIcon icon={faAngleDown}/></p>
            </div>
        </nav>
        </>
    )
}
export default Navbar