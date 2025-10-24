
export default function SandwichDetails({el}) {
  return (
    <>
      <div className="sandwich bg-backgroundColor flex justify-center items-center gap-10 py-5 max-lg:flex-col max-lg:text-center max-lg:gap-0">
                      
        {/* sandwich picture box */}
        <div className="pic w-[150px] h-[150px]">
            <img src={el.pic} alt={el.name} aria-label="" className="w-full h-full"/>
        </div>

        {/* sandwich description */}
        <div className="text">
            <h2 className="font-bold capitalize text-orangee text-xl mb-3">{el.name}</h2>
            <p className=" text-Whitee max-w-[400px] text-[16px]">{el.desc}</p>
        </div>

    </div>
    </>
  )
}
