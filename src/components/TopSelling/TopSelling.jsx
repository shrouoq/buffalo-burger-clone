import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// React icons
import { FaLongArrowAltRight } from 'react-icons/fa';

// redux actions
import { getData } from "../../Toolkit/Slice/DataSlice";
import ItemCard from './../Cards/ItemCard';
import { NavLink } from 'react-router-dom';

export default function TopSelling() {

let data = useSelector(state => state.DataSlice.data);
let [selectedItems , setSelectedItems] = useState([])
const dispatch = useDispatch();
const categories = useMemo(() => ['appetizers' , 'burger sandwich' , 'drinks' , 'chicken sandwich'],[])


useEffect(() => {
    if(!data || data.length === 0){
        dispatch(getData())
    }
},[data, dispatch])

useEffect(()=> {
    let selected = categories.map((category) => data.find(p => p.category === category) || null)
    setSelectedItems(selected)
},[data,categories])


  return (
    <div className="px-2 mb-6">
        <h2 className="uppercase text-orangee font-semibold text-[19px]">top sellings</h2>

        <div className="products-container flex justify-center items-end gap-6 flex-wrap">
            {
                selectedItems.map(item => item && <NavLink to={`/productDetails/${item.id}`} key={item.id}><ItemCard item={item} /></NavLink>)
            }

            <div role='group' className="group itemCard mt-3 rounded-sm w-[288px] h-[215px] bg-lightGray cursor-pointer transition-transform duration-1000 ease-in-out hover:translate-y-[-13px] flex justify-center items-center">
                <NavLink to='menu/offers' className='capitalize flex items-center gap-2 group-hover:text-orangee font-semibold'>
                    <span>view items</span>
                    <span><FaLongArrowAltRight /></span>
                </NavLink>
            </div>
        </div>
      
    </div>
  )
}
