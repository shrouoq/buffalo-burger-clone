

export default function Chooice({itemChoosed,orderItem,content,handelChoosedOffer}){

  const options = itemChoosed[0].offerOptiopns.filter(el => el.choose === content);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
        {
            options.map(option => (
                <div 
                    className="box flex items-center gap-4 bg-lightGray rounded-sm py-2 px-3 cursor-pointer" 
                    onClick={() => handelChoosedOffer(option)}
                    style={{border : orderItem.offerChoices.includes(option) && '3px solid rgb(255 95 0)'}}
                >
                    <img src={option.pic} alt={option.name} aria-label="combo picture" loading="lazy" className="w-[75px] h-[75px]"/>
        
                    <div className="text">
                    
                        <h3 className="font-semibold text-[15px] text-backgroundColor">
                            {`${option.name}`}
                        </h3>

                        <p className="text-gray-500 text-xs font-medium">{option.desc}</p>
                    
                    </div>
                </div>
            ))
        }
    </div>
  )
}
