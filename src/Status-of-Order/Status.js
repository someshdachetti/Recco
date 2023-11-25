import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faIceCream,faCandyCane, faCakeCandles,faCookieBite,faAppleAlt,faLemon, faLeaf, faCheese  } from '@fortawesome/free-solid-svg-icons';
import './Status.css'

const StatusOfOrder = () =>{
    return (
        <>
        <div className='status-of-order-container'>
            <div className='supplier-container'>
                <h1 className='status-heading'>supplier</h1>
                <p className='status'>East Cost <br/> & Vegetables</p>
            </div>

               <hr className='line'/>

            <div className='shoping-container'>
                <h1 className='status-heading'>Shoping Date</h1>
                <p className='status'>25-11-23</p>
            </div>

            <hr className='line'/>
           
            <div className='shoping-container'>
                <h1 className='status-heading'>Total</h1>
                <p className='status'>$17,898</p>
            </div>

            <hr className='line'/>

            <div className='shoping-container'>
                <h1 className='status-heading'>Category</h1>
                <FontAwesomeIcon className='icon' icon={faIceCream} />
                <FontAwesomeIcon className='icon'  icon={faCandyCane} />
                <FontAwesomeIcon className='icon' icon={faCakeCandles} />
                <FontAwesomeIcon className='icon' icon={faCookieBite} />
                <br/>
                <FontAwesomeIcon className='icon' icon={faAppleAlt} />
                <FontAwesomeIcon className='icon' icon={faLemon} />
                <FontAwesomeIcon className='icon' icon={faLeaf} />
                <FontAwesomeIcon className='icon' icon={faCheese} />
            </div>

            <hr className='line'/>

            <div className='shoping-container'>
                <h1 className='status-heading'>Department</h1>
                <p className='status'>Recco-Village<br/>10-39</p>
            </div>
            
            <hr className='line'/>

            <div className='shoping-container'>
                <h1 className='status-heading'>Status</h1>
                <p className='status'>Waiting for<br/> Approval</p>
            </div>
            
        </div>
        </>
    )
}

export default StatusOfOrder