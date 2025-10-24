import {useSelector} from 'react-redux';
// ******icons******
import { MdClose } from 'react-icons/md';
import { MdOutlineShoppingBasket } from 'react-icons/md';
// ******react router******
import { NavLink } from 'react-router-dom';
// ******components******
import SidebarItem from './SidebarItem';



export default function ItemsSideBar({closeSidebar}) {

  const {items} = useSelector(state => state.SelectedItems);

  return (
    <div className="sideBar right fixed right-0 top-0 h-full w-full bg-Whitee max-w-[250px] py-3 px-2 transition-transform translate-x-[100%] duration-500 ">

      <div className="relative h-full">

        {/* header */}
        <div className="sideBar-header flex justify-between items-center">

          <button onClick={closeSidebar} className='text-black text-[20px]'><MdClose /></button>
          <h2 className='uppercase text-black'>cart items</h2>          
          <NavLink to='/CardItems' className='uppercase text-orangee text-xs' onClick={closeSidebar}>go to cart</NavLink>
          <p className="totalItems w-[25px] h-[25px] rounded-full text-center leading-[25px] bg-black">{items.length}</p>
        
        </div>

        {/* items */}
        <div className="items flex flex-col gap-3">
           {
             items.length !== 0 ? (
                items.map((item , index)=> {
                  return <SidebarItem key={index} item={item}/> 
                })        
             ): 
             <p className='capitalize text-center text-black mt-10 text-sm'>there are no items to show</p>
           }
        </div>

        {/* button to cart items */}
        <NavLink to='/CardItems' className='bg-orangee rounded-sm w-full absolute bottom-0 py-2 flex items-center justify-center gap-2' onClick={closeSidebar}>
          <MdOutlineShoppingBasket className='text-[20px]'/>
          <span className='capitalize'>go to cart</span>
        </NavLink>

      </div>

    </div>
  )
}
