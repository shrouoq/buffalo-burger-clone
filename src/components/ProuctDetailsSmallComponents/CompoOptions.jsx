

export default function CompoOptions({el,handelCompoClick,orderItem}) {
  return (
    <>
      
    <div 
        key={el.comboName} 
        className="box flex items-center gap-4 bg-lightGray rounded-sm py-2 px-3 cursor-pointer"
        onClick={handelCompoClick}
        style={{border : orderItem.compo === el.comboName ? '2px solid rgb(255 95 0)' : 'none'}}
    >
        <img src={el.img} alt={el.name} aria-label="combo picture" loading="lazy" className="w-[75px] h-[75px]"/>
        
        <div className="text">
        
          <h3 className="font-semibold text-[15px] text-backgroundColor">
              {`${el.comboName}`}
              {`${el. comboName !== 'Choose Sandwich Only' ? `(EGB${el.comboPrice})` : '' }`}
          </h3>

          {
              el.comboDesc !== '' && <p className="text-gray-500 text-xs font-medium">{el.comboDesc}</p>
          }
        
        </div>

    </div>

    </>
  )
}
