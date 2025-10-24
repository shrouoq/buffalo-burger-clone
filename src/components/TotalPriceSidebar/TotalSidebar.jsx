import { NavLink } from 'react-router-dom';
// *****icons*****
import { FaPlus } from 'react-icons/fa6';
// import { useEffect, useState } from 'react';

export default function TotalSidebar({items}) {

    const totalPrice = items.reduce((acc,item) => {
      return  (acc + Number(item.total) * Number(item.quantity))
    },0)


  return (
    <div>
        {/* Special Requests Container */}
        <div className="Special-Requests bg-lightGray p-7 rounded-sm">
            <h2 className="font-bold uppercase text-[16px] tracking-tight">Special Requests</h2>
            <span className="text-gray-400 text-xs">No extras are allowed as a special request</span>
            <input type="text" aria-label='Special Requests' placeholder="Special Requests" className="w-full px-3  h-[100px] rounded-sm mt-3 placeholder:top-0"/>
        </div>

        <div className="total-price py-3">
            
            {/* meal Price */}
            <div className="price flex justify-between capitalize text-[15px] font-medium">
                <h2>sub total:</h2>
                <p>
                    <span className='uppercase'>egb</span>
                    <span>{totalPrice}</span>
                </p>
            </div>

            {/* including Vat */}
            <div className="vat flex justify-between capitalize text-[15px] font-medium py-5">
                <h2>vat:</h2>
                <p><span className='uppercase'>egb</span> <span>{(totalPrice * 0.14).toFixed(2)}</span></p>
            </div>

            {/* calculating total price */}
            <div className="total flex justify-between capitalize pt-5 sidebar-border">
                <h2 className='font-bold text-orangee text-[20px]'>Total<span className='block text-xs font-medium text-gray-400'>Including VAT</span></h2>
                <p className='font-bold text-orangee text-[20px]'><span className='uppercase'>egb </span><span>{Number(totalPrice) + Number((totalPrice * 0.14).toFixed(2))}</span></p>
            </div>

        </div>

        {/* navigation btns */}
        <NavLink to='/menu' className='text-orangee btn'><FaPlus /> add more items</NavLink>
        <NavLink to='/checkout' className='bg-orangee text-Whitee btn'>checkout</NavLink>
    </div>
  )
}
