import {useSelector} from 'react-redux';
// ******react router******
import { NavLink } from 'react-router-dom';
// ******icons******
import { MdLoyalty } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { MdMenu } from 'react-icons/md';
// ******components******
import SideNavbar from './Sides/SideNavbar';


export default function HeaderLeftSide({ handleOpenlSign}) {

    const {items} = useSelector(state => state.SelectedItems)

    const openSideNav = () => {
        document.querySelector('.sideBar').classList.add('active');
    }

  return (
    <div className="left flex items-center gap-3 flex-1">
        

        {/* Loyality cart */}
        <div className="points max-lg:hidden">
            <button className='bg-orangee flex items-center gap-1 rounded-sm capitalize text-btn px-4 py-2'>
                <MdLoyalty className='text-[23px]' />
                <span>my loyalty points</span>
            </button>
        </div>

        {/* link to cart items */}
        <div className="cardItems text-orangee max-md:hidden">
            <NavLink to='/CardItems' className='flex items-center gap-1 font-semibold '>
                <span><FaCartShopping className='text-[22px]' /></span>
                <span className='uppercase pt-1 text-[17px]'>cart</span>
                <span className='w-[25px] h-[25px] rounded-full bg-Whitee text-center'>{items.length}</span>
            </NavLink>
        </div>

        {/* menu icon to open side navbar in small screens */}
        <button className='hidden max-md:block text-[30px]' onClick={openSideNav}>
            <MdMenu />
        </button>

        <SideNavbar handleOpenlSign={handleOpenlSign} itemsW={items.length}/>
    
    </div>
  )
}
