import { FiPlusCircle } from 'react-icons/fi';

export default function ItemCard({item,handelClick}) {
  return (
    <div role='group' className="itemCard w-[288px] h-[350px] flex flex-col cursor-pointer transition-transform duration-1000 ease-in-out hover:translate-y-[-13px]" onClick={handelClick}>
        
        {/* image section */}
        <div className="pic h-[176px] w-[176px] mb-[-55px] flex justify-start relative z-10">
            <img src={item.pic} alt="old school sandwich" loading='lazy' aria-labelledby='old-school' className='w-full h-full'/>
        </div>

        {/* text section */}
        <div className="text bg-lightGray rounded-sm py-10 px-3 flex-1 flex flex-col justify-between z-0">
            <h2 className='uppercase font-bold text-[16px] pt-3'>{item.name}</h2>
            
            <p id='old-school' className='capitalize text-pColor text-sm py-4 font-medium h-[90px]'>{item.desc? item.desc : ''}</p>
            
            {/* footer */}
            <div className="flex justify-between items-center pt-3">
                <span className='font-semibold'>EGP {item.price}</span>

                <button 
                    className='w-[30px] h-[30px] rounded-full bg-orangee font-bold flex items-center justify-center focus:outline-none'
                    aria-label='add to cart'
                >
                    <FiPlusCircle className='text-[22px] text-Whitee' />
                </button>
            </div>
        </div>
    </div>
  )
}


