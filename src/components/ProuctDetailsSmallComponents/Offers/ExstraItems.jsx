

export default function ExstraItems({itemChoosed,setOrderItem}) {

    const handelChange = (p) => {
        setOrderItem(prev => ({
            ...prev,
            exstraChooices     : p,
            exstraChooicesPrice: p.price,
        }))
    }

  return (
    <div className="mt-10 flex justify-center gap-5">
      {
        itemChoosed[0].exstra?.map(p => (
            <div className="flex items-center gap-2 font-medium text-lg capitalize cursor-pointer">
                <input 
                    type="radio" 
                    id={p.type} 
                    name='exstraItems' 
                    onChange={() => handelChange(p)}
                    className="w-5 h-5 accent-orangee" 
                   />
                <label htmlFor={p.type} className="cursor-pointer">{p.type}</label>
            </div>
        ))
      }
    </div>
  )
}
