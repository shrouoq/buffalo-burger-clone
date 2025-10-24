import { NavLink } from 'react-router';
import logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <div className='bg-backgroundColor py-10 '>
      <div className="container mx-auto">

        <div className="logo flex max-lg:justify-center">
            <NavLink to='/' className='max-lg:mx-auto'>
                <img src={logo} alt="logo" className='w-[240px]' />
            </NavLink>
        </div>

        <div className="links text-Whitee capitalize mt-10 grid max-xs:grid-cols-1 grid-cols-2 lg:grid-cols-4 max-lg:text-center gap-10 "> 

            <div className="box flex flex-col gap-3">
                <NavLink to='menu' className='hover:text-orangee'>menu</NavLink>
                <NavLink to='/' className='hover:text-orangee'>home</NavLink>
                <NavLink to='/CardItems' className='hover:text-orangee'>cart details</NavLink>
                <NavLink to='loyality' className='hover:text-orangee'>loyality</NavLink>
            </div>

            <div className="box flex flex-col gap-3">
                <NavLink to='about' className='hover:text-orangee'>about us</NavLink>
                <NavLink to='franchise' className='hover:text-orangee'>franchise request</NavLink>
                <NavLink to='branches' className='hover:text-orangee'>our branches</NavLink>
                <NavLink to='terms' className='hover:text-orangee'>terms and conditions</NavLink>
            </div>

            <div className="box flex flex-col gap-3">
                <NavLink to='' className='hover:text-orangee'>log in</NavLink>
                <NavLink to='' className='hover:text-orangee'>sign up</NavLink>
            </div>

            <div className="box flex flex-col gap-3">
                <span>talk to us</span>
                <span className='hover:text-orangee font-semibold text-[26px]'>19914</span>
            </div>

            

        </div>

      </div>
    </div>
  )
}
