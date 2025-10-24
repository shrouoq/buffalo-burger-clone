import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// ******components******
import Form from "../components/CheckoutComponents/Form";
import PaymentSidebar from "../components/CheckoutComponents/PaymentSidebar";
import { supabase } from "../components/Supabase/SubapaseClient";
// ******actions******
import { resetItems } from "../Toolkit/Slice/SelectedItemsSlice";


export default function Checkout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData , setUserData] = useState({
      order : JSON.parse(localStorage.getItem('selectedItems')) || [] ,
      telOne: '',
      telOp : '',
      name  : '',
      email : '',
      address: '',
      city :'',
      building :'',
      floor :'',
      appartment: '',
      exstraD : '',
      promoC:'',
      payMethod:'cash',
      totalPrice : 0
  })
  const [loading , setLoading] = useState(false);
  const [error , setError]     = useState('')

  const handeOpenlSign = () => {
    document.querySelector('.sign-prombet').style.visibility = 'visible';
  }

  const handelChange = (e) => {
        setUserData(prev => (
            {
                ...prev,
                [e.target.name] : e.target.value
            }
        ))
  }

  const handelSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    // get user from supabase
    const {data:userrData} = await supabase.auth.getUser();

    // insert client personal data to order table
    const { data : orderTableData, error: orderTableError } = await supabase
    .from('order')
    .insert({ 
      created_at : new Date().toISOString(),
      name       : userData.name,
      telOne     : userData.telOne,
      telOp      : userData.telOp,
      email      : userData.email,
      address    : userData.address,
      city       : userData.city,
      building   : userData.building,
      floor      : userData.floor,
      appartment : userData.appartment,
      exstraD    : userData.exstraD,
      promoC     : userData.promoC,
      payMethod  : userData.payMethod,
      user_id    : userrData.user.id,
      status     : 'pending'
    })
    .select();
    
    if(orderTableError){
      alert(orderTableError.message);
      setError(orderTableError.message);
    }

    // insert order details to order items table
    const orderItems = userData.order.map(item => {
        return {
          created_at  : new Date().toISOString(),
          product_id  : item.sandwich.id,
          product_name: item.sandwich.name,
          quantity    : item.quantity,
          weight      : item.weight,
          bread       : item.bread,
          drink       : item.drink,
          totalPrice  : (Number(item.quantity) * Number(item.total)) + ((Number(item.quantity) * Number(item.total)) * 0.14) + 50 , /*50 represent delivery fees*/
          order_id    : orderTableData[0].id,
          user_id     : userrData.user.id,
          offerOptions: item.offerChoices,
          exstraItems : item.exstraChooices
        }
    })

    const { data : orderItemsData , error : orderItemsErr } = await supabase
    .from('order_items')
    .insert(orderItems)
    .select()

    if(orderItemsErr){
      alert(orderItemsErr.message);
      setError(orderItemsErr.message);
    }
    
    dispatch(resetItems());

    setUserData(() => ({
      order : JSON.parse(localStorage.getItem('selectedItems')) || [] ,
      telOne: '',
      telOp : '',
      name  : '',
      email : '',
      address: '',
      city :'',
      building :'',
      floor :'',
      appartment: '',
      exstraD : '',
      promoC:'',
      payMethod:'cash',
      totalPrice : 0
    }))

    if(!error){
      navigate('/');
    }
    
    setLoading(false);
    
  }

  return (
    <div className="mt-[120px] py-10 ">
      <div className="container mx-auto">
        <form 
          onSubmit={handelSubmit}
          className="flex flex-wrap"
        >
          <div className="form w-2/3 max-md:w-full">

            {/* form header */}
            <div className="form-header checkout-box flex justify-center items-center">
              <p className="text-sm font-bold mr-3">Login to collect/redeem your points</p>
              <button className="bg-Whitee px-8 py-4 font-bold capitalize rounded-sm" onClick={handeOpenlSign}>login</button>
            </div>

            {/* form left side */}
            <div className="contact-info">
                <Form userData={userData} handelChange={handelChange}/>
            </div>

          </div>

          {/* payment sidebar */}
          <div className="payment-methods pl-5 max-md:pl-0 w-1/3 max-md:w-full">
              <PaymentSidebar userData={userData} setUserData={setUserData} handelChange={handelChange} error={error}/>
          </div>
        </form>

      </div>
    </div>

  )
}
