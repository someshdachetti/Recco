import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPrint, faSearch, faCheck, faXmark  } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { useState } from 'react';

const data = [
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''

    },
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    {
        productImg: "https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png",
        brand : 'Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid',
        price : '$60.67 /6*LB',
        quantity  :'15 x 6 * 1LB',
        total : '$9000.88',
        status :''
    },
    
    
]


const Products = () =>{
    const [activePopUp, setActivePopUp] = useState("");

   const onClickCheck =(index) =>{
        data[index].status = 'Approved'
    }

    const onClickingMissingProduct = (index) =>{
        data[index].status = 'Missing'

        const showingPopup = document.getElementById('showing-Popup');
        if(showingPopup){
            showingPopup.classList.remove('showPopup')
        }
    }


   const onClickingMissingProductUrgent = (index)=>{ 
           data[index].status = 'Missing-Urgent'
            const showingPopup = document.getElementById('showing-Popup');
            if(showingPopup){
            showingPopup.classList.remove('showPopup')
        }
   }


const onClickCross = (index) => {
    setActivePopUp(index)
    const showingPopup = document.getElementById('showing-Popup');
    if (showingPopup) {
        showingPopup.classList.add('showPopup');
    }
}

const HidePop = () =>{
    const showingPopup = document.getElementById('showing-Popup');
    if(showingPopup){
        showingPopup.classList.remove('showPopup')
    }
}

    const onClickEdit =() =>{
        const Edit = document.getElementById('Edit')
        if (Edit){
            Edit.classList.add('EditPopup')
            
        }
    }

    const onClickEditCross = ()=>{
        const Edit = document.getElementById('Edit')
        if (Edit){
            Edit.classList.remove('EditPopup')
            
        }
    }


    return (
        <>
        <div className='Add-item-container'>
        <div className='search-container'>
            <input className='input' type='search' placeholder='Search....'/>
            <FontAwesomeIcon className='search-icon' icon={faSearch}/>
        </div>

        <div className='Adding-items-container'>
            <button className='Add-button'>Add</button>
            <FontAwesomeIcon className='print' icon={faPrint}/>
        </div>
    </div>

        <table className='product-category-container'>
            <tr>
                <th className='product-name-heading'>Product Name</th>
                <th className='product-name-heading'>Brand</th>
                <th className='product-name-heading'>Price</th>
                <th className='product-name-heading'>Quantitiy</th>
                <th className='product-name-heading'>Total</th>
                <th className='product-name-heading'>status</th>    
            </tr>
           {data.map((each, index)=> (
            <tr key ={each.index}>
            <div className='img-container'>
            <img src={each.productImg} alt='Avock' className='Apple'/>
                <td className='td'>{each.brand}</td>
                </div>
                <td className='td'>{each.price}</td>
                <td className='td'>{each.quantity}</td>
                <td className='td'> {each.total}</td>
                <td className='td'>$9000.88</td>
                <td className={` ${each.status === 'Approved' ? 'Approved-status': ""}`}>{each.status}</td>
            <div className='icons'>
            <FontAwesomeIcon className={` ${each.status === 'Approved' ? 'Approved-status' : ''}`} icon={faCheck} onClick={() => onClickCheck(index)}/>
            <FontAwesomeIcon className={`${each.status ==='Missing' ? 'add-missing-product': 'missing-product'}`} icon={faXmark} onClick={() => onClickCross(index)}/>
                <p className='check' onClick={onClickEdit}>Edit</p>
            </div>
            </tr>
            ))}
        </table>


        <div className='onClickcross-card-container' id="showing-Popup">
                <FontAwesomeIcon className='cross-icon' icon={faXmark} onClick={HidePop}/>
                <h1 className='product-issue'>Missing Product</h1>
                <p className='urgent'>Is'Chicken Breast Fillets,Boneless...'Urgent?</p>
                <div className='missing-product'>
                    <p className='No' onClick={() => onClickingMissingProduct(activePopUp)}>No</p>
                    <p className='Yes' onClick={() => onClickingMissingProductUrgent(activePopUp)}>Yes</p>
                </div>
            </div>

            
            <div className='Edit-Container' id ="Edit">
            <FontAwesomeIcon className='cross-mark' icon={faXmark} onClick={onClickEditCross}/>
                <p className='chicken-breast'>Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid...</p>
                <div className='updatating-container'>
                <img src="https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png" alt='Avock' className='apples'/>
                <div className='price-quanity-container'>
                    <div className='price-container'>
                        <h3 className='price-name'>Price($)</h3>

                        
                        <p className='price'>99999.9 </p> 
                      

                        <p className='lb'>/ 6 *1Lb</p>
                    </div>

                    <div className='quanity-container'>
                                <h3 className='quantity-name'>Quanity</h3>
                                <button className='decrement-button'> - </button>
                                <p className='price'>99998</p>
                                <button className='decrement-button'> + </button>
                                <p className='lb'>x 6 * Lb</p>
                    </div>
                    <div className='total-container'>
                        <h3 className='total-name'>Total</h3>
                        <p className='total'>$9,9997000.02</p>
                    </div>
                </div>
                
                </div>

                <div className='optional-container'>
                <p className='choose-reason'>Choose Reason</p>
                <p className='optional'>(Optional)</p>
                </div>

<div className='choose-reason-container'>
    <p className='select-reason-container'>Missing Product</p>
    <p className='select-reason-container'>Quanity Is Not Same</p>
    <p className='select-reason-container'>Price is not Same</p>
    <p className='other'>Other</p>
</div>

<div className='cancel-or-send-container'>
    <button className='cancel'>Cancel</button>
    <button className='send'>Send</button>
</div>

            </div>


    </>
    );
}
export default Products