

export default function Drink({itemChoosed,setOrderItem}) {
    
  const handelChange = (d) => {
    setOrderItem(prev => ({
        ...prev,
        drink : d
    }))
  }

  return (
    <div className="mt-10 flex justify-center gap-7">
      {
        itemChoosed[0].drink?.map(d => (
            <div className="flex items-center gap-2 font-medium text-lg capitalize">
                <input 
                    type="radio" 
                    name="drinkFile" 
                    id={d.type} 
                    onChange={() => handelChange(d)}
                    className="w-5 h-5 accent-orangee" 
                />
                <label htmlFor={d.type} className="cursor-pointer">{d.type}</label>
            </div>
        ))
      }
    </div>
  )
}
