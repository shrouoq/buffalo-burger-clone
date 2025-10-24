import {NavLink} from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Area({ele}) {
  return (
    <div className="bg-[#282827] rounded-sm p-8">
      
        <h2 className='uppercase font-semibold'>{ele.area}</h2>
        <p className='cairo py-5'>{ele.address}</p>
        <NavLink to={ele.location} className='text-orangee font-semibold uppercase flex gap-5 items-center' target='_blank'>gat location <FaLongArrowAltRight /></NavLink>
    </div>
  )
}
