

export default function BreadContaiiner({b,setOrderItem,orderItem}) {
  return (
    <>
      <div key={b.color} className="flex justify-center items-center gap-2 bg-Whitee py-3 px-10 max-w-[300px]">
        <input 
            type="radio" 
            name='bread' 
            onChange={() => setOrderItem(prev => ({...prev , bread : b.color}) )}
            id={b.color} 
            className="accent-orangee w-5 h-5" 
            checked={orderItem.bread === b.color}
        />
        <label htmlFor={b.color} className="capitalize cursor-pointer hover:text-orangee font-medium">{b.color}</label>
    </div>
    </>
  )
}
