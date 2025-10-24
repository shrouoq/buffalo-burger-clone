// *****icons*****
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
// *****react-redux*****
import { useDispatch } from 'react-redux';
// *******actions*******
import { decrease, increase } from '../../Toolkit/Slice/SelectedItemsSlice';


export default function CartItemCard({item}) {

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase(item))
  }

  const handelDecrease = () => {
    dispatch(decrease(item))
  }


  return (
    <div className="px-3 mt-5 flex gap-3">
        <div className="titl p-3 font-bold flex gap-3 w-[60%] bg-Whitee rounded-sm">
            <img src={item.sandwich?.pic} alt="product picture" loading='lazy' className='w-[70px] h-[70px]'/>
            <h2 className='text-lg capitalize'>{item.sandwich?.name}</h2>
        </div>

        <div className="qty flex-1 flex justify-center items-center gap-2">
            <button className='w-[20px] h-[20px] rounded-full text-black border-[2px] border-solid border-black' onClick={handelDecrease}>
                <FaMinus className='cursor-pointer' />
            </button>
            
            <span className='text-black'>{item.quantity}</span>
            
            <button className='w-[20px] h-[20px] rounded-full text-orangee border-[2px] border-solid border-orangee' onClick={handleIncrease}>
                <FaPlus />
            </button>
        </div>

        <div className="total flex-1 uppercase text-black text-sm font-semibold flex justify-center items-center">
            {item.total * item.quantity}
        </div>
    </div>
  )
}
