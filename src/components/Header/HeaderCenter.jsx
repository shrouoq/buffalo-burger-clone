import { NavLink } from "react-router-dom";


export default function HeaderCenter({Logo}) {
  return (
    <div className="center flex-1 flex justify-center">
        <NavLink to='/'>
            <img src={Logo} alt="website logo" aria-label="buffaloburger logo" loading="lazy" className='w-[240px]' />
        </NavLink>
    </div>
  )
}
