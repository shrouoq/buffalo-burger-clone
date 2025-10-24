// ******images******
import Value from '../../assets/offers/valu.webp';
// ******react-redux******
import {useSelector} from 'react-redux';
// ******react-router******
import {NavLink} from 'react-router-dom';
// *****icons*****
import { FaPlus } from 'react-icons/fa6';



export default function PaymentSidebar({userData,setUserData,handelChange}) {

    const items = useSelector(state => state.SelectedItems.items);

    const orderTotalPrice = items.reduce((acc,item) => {
        return acc + (Number(item.total) * Number(item.quantity))
    },0)
    
  return (
    <div className="payment-box">
      
        {/* promo code box */}
        <div className="promo-code payment-nested-box">
            <label htmlFor="promo-code" className="label">promo code</label>
            <input 
                type="number" 
                name='promoC'
                value={userData.promoC}
                onChange={handelChange}
                id="promo-code" 
                className="input-box w-2/3"
            />
            <button className="ml-3 border-[1px] border-solid border-gray-300 py-2 px-7 rounded-sm bg-Whitee uppercase text-gray-300 text-sm">apply</button>
        </div>

        <div className="payment-nested-box mt-5">
            <div className="method">
                    
                {/* payment methods  */}
                <label htmlFor="cash" className='radio-label'>
                    <input 
                        type="radio" 
                        name="payMethod" 
                        onChange={() => setUserData(prev => ({...prev , payMethod : 'cash'}))}
                        checked={userData.payMethod === 'cash'}
                        id="cash" 
                        className='input-radio peer'
                    /> 
                    <span className='peer-checked:text-orangee'>cash</span>
                </label>
            
                <label htmlFor="visa" className='flex items-center gap-1 radio-label mt-3'> 
                    <input 
                        type="radio" 
                        name="payMethod" 
                        onChange={() => setUserData(prev => ({...prev , payMethod : 'visa'}))} 
                        checked={userData.payMethod === 'visa'}
                        id="visa" 
                        className='input-radio peer'
                    />
                    <span className='peer-checked:text-orangee'>Credit/Debit Card or</span>
                    <img src={Value} alt="value image" loading='lazy' className='w-[40px] h-[10px]'/>
                </label>

            </div>
        </div>

        {/* total price , delivery fees and vat */}
        <div className="totalPrice-box payment-nested-box mt-5">

            <div className="box flex justify-between">
                <h3 className='capitalize text-sm'>sub total:</h3>
                <p className='font-medium text-sm'>EGB {orderTotalPrice}</p>
            </div>

             <div className="box flex justify-between my-2">
                <h3 className='capitalize text-sm'>Delivery fees:</h3>
                <p className='font-medium text-sm'>EGB 50</p>
            </div>

            <div className="box flex justify-between">
                <h3 className='capitalize text-sm'>Total Vat:</h3>
                <p className='font-medium text-sm'>EGB {(orderTotalPrice * .14).toFixed(2)}</p>
            </div>

            <div className="box flex justify-between my-3 py-3 sidebar-border">
                <h3 className='font-bold text-[20px]'>TOTAL</h3>
                <p className='font-bold text-[20px]'>{((orderTotalPrice * .14) + orderTotalPrice + 50).toFixed(2)}</p>
            </div>
            
            {/* btns */}
            <NavLink to='/menu' className='text-orangee btn'><FaPlus /> add more items</NavLink>
            <button type='submit' className='text-Whitee bg-orangee btn'>place order</button>
            
            
            
        </div>

    </div>
  )
}
