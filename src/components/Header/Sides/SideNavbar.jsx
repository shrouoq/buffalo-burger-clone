// ******icon******
import { MdLanguage } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { MdLoyalty } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
// ******images******
import flag from '../../../assets/eg-flag.png'
// ******react router******
import { NavLink } from 'react-router-dom';


export default function SideNavbar({handleOpenlSign,itemsW}) {

const closeSideNav = () => {
    document.querySelector('.sideBar').classList.remove('active')
}

  return (
    <div className="sideBar fixed w-full h-full top-0 right-0 translate-x-[-100%] transition-transform duration-500 ease-linear ">

      <div className="over-lay absolute hidden w-full h-full top-0 right-0 bg-[rgba(0,0,0,.5)] z-40" onClick={closeSideNav}></div>

      <div className="side-Nav bg-backgroundColor px-2 py-4 max-w-[250px] w-full h-full fixed top-0 left-0 z-50 flex flex-col gap-5 ">
        <h2 className='font-bold'>Login to unlock exclusive</h2>

        <p className='text-[15px] font-medium'>Discount points and deals</p>

        {/* signIn button */}
        <button className='text-[16px] capitalize font-bold w-fit' onClick={handleOpenlSign}>
            login  
        </button>

        {/* signup button */}
        <button className='nav-btn justify-start' onClick={handleOpenlSign}>
            create an account
        </button>

        {/* link to cart page */}
        <NavLink to='/CardItems' className='text-orangee flex items-center gap-2 font-bold' onClick={closeSideNav}>
            <FaCartShopping className='text-[20px]' />
            <span className='text-[16px] capitalize'>cart</span>
            <span className='w-[25px] h-[25px] rounded-full bg-Whitee text-center'>{itemsW}</span>
        </NavLink>

        {/* button to loyality card */}
        <button className='nav-btn gap-2'>
            <MdLoyalty className='text-[20px] text-orangee' />
            <span className='font-bold '>my loyality points</span>
        </button>

        {/* button to call support*/}
        <button className='nav-btn gap-2'>
            <MdCall className='text-[20px] text-orangee' />
            <span>call support</span>
        </button>

      </div>
    </div>
  )
}
