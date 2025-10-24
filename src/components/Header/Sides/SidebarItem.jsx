// ******icons******
import { MdClose } from 'react-icons/md';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';
// ******redux******
import { useDispatch } from 'react-redux';
// ******actions******
import { decrease, increase, RemoveItem } from '../../../Toolkit/Slice/SelectedItemsSlice';


export default function SidebarItem({item}) {

  const dispatch = useDispatch()

  const handelIncrease = () => {
    dispatch(increase(item))
  }

  const handelDecrease= () => {
    dispatch(decrease(item))
  }

  const handelRemove = () => {
    dispatch(RemoveItem(item))
  }

  return (
    <div className='flex items-center gap-4 mt-5'>
      <div className="pic w-[90px] h-[60px]">
        <img src={item.sandwich?.pic} alt="order picture" loading="lazy" aria-label="sandwich picture" className="w-full h-full" />
      </div>

      <div className="text w-full">

        <div className="top flex justify-between">
            <h2 className='text-black capitalize text-sm '>sandwich name</h2>
            <button className='text-orangee text-[20px] flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#d1d5db]' aria-label='remove sandwich from selected items sidebar button' onClick={handelRemove}><MdClose /></button>
        </div>

        <div className="bottom flex justify-between text-sm mt-4 gap-2">
            <p className="price text-black mt-3">EGP<span>{Number(item?.total || 0) * Number(item?.quantity || 0)}</span></p>

            <div className="nums-btns text-Whitee bg-orangee flex justify-between items-center rounded-sm flex-1 p-2">
                <button className='text-black text-[20px]' onClick={handelDecrease} aria-label='decrease sandwich quantity button'><MdOutlineRemoveCircleOutline className='text-Whitee'/></button>
                <p>{item?.quantity || 0}</p>
                <button className='text-black text-[20px]' onClick={handelIncrease} aria-label='increase sandwich quantity button'><MdOutlineAddCircleOutline className='text-Whitee' /></button>
            </div>
        </div>

      </div>
    </div>
  )
}
