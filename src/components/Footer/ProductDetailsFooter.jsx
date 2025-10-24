import { FaCartShopping } from 'react-icons/fa6';


export default function ProductDetailsFooter({handleAddToCart , total}) {
  return (
    <div className="fixed bottom-0 right-0 w-full py-10 bg-babyBlue flex justify-center items-center gap-6 max-sm:flex-col">
       
       {/* add to cart button */}
      <button 
        className='bg-orangee rounded-sm flex items-center gap-2 text-Whitee uppercase font-medium text-[15px] px-10 py-3'
        onClick={handleAddToCart}  
      >
        <FaCartShopping /> add to cart
      </button>

      {/* price details */}
      <div className="box flex gap-3 ">
        <h2>
          <span className='font-bold text-2xl capitalize'>total</span>
          <span className='block font-semibold text-sm text-gray-400'>including VAT</span>
        </h2>
        <p className='font-semibold mt-auto'>EGP {`${total}`}</p>
      </div>

    </div>
  )
}
