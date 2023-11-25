import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faSearch, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { useState } from 'react';

const Products = () => {
    const [productStatus, setProductStatus] = useState([""]);

    const onClickCheck = (statusofProduct) => {
        const updatingStaus = [...productStatus];
        updatingStaus[statusofProduct] = 'Approved';
        setProductStatus(updatingStaus);
    };

    const onClickingMissingProduct = (statusofProduct) => {
        const updatestatus = [...productStatus]; 
        updatestatus[statusofProduct] = 'Missing';
        setProductStatus(updatestatus);
        const showingPopup = document.getElementById('showing-Popup');
        if (showingPopup) {
            showingPopup.classList.remove('showPopup');
        }
    };

    const onClickingMissingProductUrgent = (statusofProduct) => {
        const updatestatus = [...productStatus];
        updatestatus[statusofProduct] = 'Missing-Urgent';
        setProductStatus(updatestatus);
        const showingPopup = document.getElementById('showing-Popup');
        if (showingPopup) {
            showingPopup.classList.remove('showPopup');
        }
    };

    const onClickCross = (statusofProduct) => {
        const showingPopup = document.getElementById('showing-Popup');
        if (showingPopup) {
            showingPopup.classList.add('showPopup');
        }
    };

    const HidePop = () => {
        const showingPopup = document.getElementById('showing-Popup');
        if (showingPopup) {
            showingPopup.classList.remove('showPopup');
        }
    };

    const onClickEdit = () => {
        const Edit = document.getElementById('Edit');
        if (Edit) {
            Edit.classList.add('EditPopup');
        }
    };

    const onClickEditCross = () => {
        const Edit = document.getElementById('Edit');
        if (Edit) {
            Edit.classList.remove('EditPopup');
        }
    };

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
                <th>'</th>
                
            </tr>
     
            <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png" alt='Avock' className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'>Harmal Black Labelmany</td>
                <td className='td'>%67.96 /6 1*Lb</td>
                <td className='td'> 15 x 6 * 1LB</td>
                <td className='td'>$9000.88</td>
                <td className={` ${productStatus[1] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[1]}</td>
            <div className='icons'>
            <FontAwesomeIcon className={` ${productStatus[1] === 'Approved' ? 'Approved-status' : 'Approved'}`} icon={faCheck} onClick={() => onClickCheck(1)}/>
            <FontAwesomeIcon className={`${productStatus[1] ==='Missing' ? 'add-missing-product': 'missing-product'}`} icon={faXmark} onClick={() => onClickCross(1)}/>
                <p className='check' onClick={onClickEdit}>Edit</p>
            </div>
        </tr>


        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png" alt='Avock' className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'>Harmal Black Labelmany</td>
                <td className='td'>%60.67 / 6*1LB</td>
                <td className='td'> 15 x 6 * 1LB</td>
                <td className='td'> $9000.88</td>
                <td className={` ${productStatus[2] === 'Approved' ? 'Approved-status' : 'Approved'}`}>{productStatus[2]} </td>
            <div className='icons'>
                <FontAwesomeIcon className={` ${productStatus[2] === 'Approved' ? 'Approved-status' : 'Approved'}`} icon={faCheck} onClick={()=> onClickCheck(2)}/>
                <FontAwesomeIcon className={`${productStatus[2] ==='Missing' ? 'add-missing-product': 'missing-product'}`} icon={faXmark} onClick ={()=>onClickCross(2)}/>
                <p className='check' onClick={onClickEdit}>Edit</p>
            </div>
        </tr>   


        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png" alt='Avock' className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'>Harmal Black Labelmany</td>
                <td className='td'>$60.67 / 6 * 1Lb</td>
                <td className='td'> 0 x 6 * 1LB</td>
                <td className='td'> 3</td>
                <td className={` ${productStatus[3] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[3]}</td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick = {() => onClickCheck(3)}/>
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>

        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/0rczRWF/Screenshot-2023-11-24-194035.png" alt='Avock' className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'>Harmal Black Labelmany</td>
                <td className='td'>$60.67 / 6 * 1LB</td>
                <td className='td'> 13 x 6 * 1LB</td>
                <td className='td'>3</td>
                <td className={` ${productStatus[4] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[4]}</td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick = {() => onClickCheck(4)} />
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>


            
<tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/87zSxcQ/Screenshot-2023-11-24-194000.png" alt="AVOCK" className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'> Harmal Green</td>
                <td className='td'>$68.89 / 6 * 1LB</td>
                <td className='td'> $60.67 /6*1LB</td>
                <td className='td'>0</td>
                <td className={` ${productStatus[6] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[6]} </td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick = {() => onClickCheck(6)}/>
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>

        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/87zSxcQ/Screenshot-2023-11-24-194000.png" alt="AVOCK" className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'> Harmal Green</td>
                <td className='td'>$68.89 / 6 * 1LB</td>
                <td className='td'> $60.67 /6*1LB</td>
                <td className='td'> 2</td>
                <td className={` ${productStatus[7] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[7]} </td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick={()=> onClickCheck(7)}/>
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>


        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/87zSxcQ/Screenshot-2023-11-24-194000.png" alt="AVOCK" className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'> Harmal Green</td>
                <td className='td'>$68.89 / 6 * 1LB</td>
                <td className='td'> $60.67 /6*1LB</td>
                <td className='td'> 3</td>
                <td className={` ${productStatus[8] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[8]} </td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick={() => onClickCheck(8)}/>
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>

        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/87zSxcQ/Screenshot-2023-11-24-194000.png" alt="AVOCK" className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'> Harmal Green</td>
                <td className='td'>$68.89 / 6 * 1LB</td>
                <td className='td'> $60.67 /6*1LB</td>
                <td className='td'> 2</td>
                <td className={` ${productStatus[9] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[9]}</td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick={() => onClickCheck(9)}/>
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>

        <tr>
            <div className='img-container'>
            <img src="https://i.ibb.co/87zSxcQ/Screenshot-2023-11-24-194000.png" alt="AVOCK" className='Apple'/>
                <td className='td'> Chicken Breast Fillets, Boneless matuu<br/> maMarinated 6 Ounce Raw, invivid</td>
                </div>
                <td className='td'> Harmal Green</td>
                <td className='td'>$68.89 / 6 * 1LB</td>
                <td className='td'> $60.67 /6*1LB</td>
                <td className='td'> 2</td>
                <td className={` ${productStatus[10] === 'Approved' ? 'Approved-status' : ''}`}>{productStatus[10]}</td>
            <div className='icons'>
                <FontAwesomeIcon className='check' icon={faCheck} onClick={() => onClickCheck(10)}/>
                <FontAwesomeIcon className='check' icon={faXmark} onClick ={onClickCross}/>
                <p className='check'>Edit</p>
            </div>
        </tr>
        </table>


        <div className='onClickcross-card-container' id="showing-Popup">
                <FontAwesomeIcon className='cross-icon' icon={faXmark} onClick={HidePop}/>
                <h1  className='product-issue'> Missing Product</h1>
                <p className='urgent'>Chicken Breast Fillets...</p>
                <div className='missing-product'>
                    <p className='No' onClick={() => onClickingMissingProduct(0)}>No</p>
                    <p className='Yes' onClick={() => onClickingMissingProductUrgent(0)}>Yes</p>
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