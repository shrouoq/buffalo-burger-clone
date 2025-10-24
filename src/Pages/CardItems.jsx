import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ******components******
import CartItemCard from "../components/Cards/CartItemCard";
import TotalSidebar from "../components/TotalPriceSidebar/TotalSidebar";
// ******actions*******
import { setItems } from "../Toolkit/Slice/SelectedItemsSlice";

export default function CardItems() {

const items = useSelector(state => state.SelectedItems.items)
const dispatch = useDispatch();


useEffect(() => {
  dispatch(setItems());
},[dispatch])


  return (
    <div className="container mx-auto mt-[100px] py-10 flex max-md:flex-col max-md:items-center gap-5">

      <div className="products bg-lightGray rounded-sm w-[65%] max-md:w-full py-10">
        
          <div className="header px-3 flex gap-3">
            {/* title */}
            <div className="titl font-bold uppercase text-3xl flex items-center w-[60%]">
              <span>
                cart
              </span> 
              <span className="inline-block text-[15px] font-normal w-[25px] h-[23px] leading-[25px] rounded-full bg-black text-white text-center">
                {items.length}
              </span>
            </div>
            {/* quantity */}
            <div className="qty flex-1 uppercase text-gray-400 text-sm font-medium flex justify-center">qty</div>
            {/* total price */}
            <div className="total flex-1 uppercase text-gray-400 text-sm font-medium flex justify-center">total</div>
          </div>

          {
            items.length !== 0 ? (
                items.map((item , index) => <CartItemCard key={index} item={item}/> )
            ): <p className="text-center text-sm capitalize">there are no items in your cart</p>
          }

      </div>

      {/* sidebar */}
      <div className="totalprice-sidebar flex-1 max-md:w-full">
        <TotalSidebar items={items} />
      </div>

    </div>
  )
}
