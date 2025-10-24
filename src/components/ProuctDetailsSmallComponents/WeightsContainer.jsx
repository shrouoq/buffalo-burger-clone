// ******icons******
import { RiWeightFill } from 'react-icons/ri';

export default function WeightsContainer({w,handelWeight,orderItem}) {
  return (
    <>
      <div 
        key={w.weight} 
        className="box flex flex-col items-center" 
        onClick={handelWeight}
        style={{color : orderItem.weight === w.weight ? 'rgb(255 95 0)' : '#fff'}}
        >
            <div className="flex flex-col items-center relative cursor-pointer">
            <RiWeightFill className="text-[80px] z-0 text-backgroundColor" />
            <span className="absolute leading-[100px] text-xs font-bold">{w.weight} gm</span>
        </div>
        {
            w.exstraPrice !==0 && <span className="font-bold text-sm text-backgroundColor">+EGP{w.exstraPrice}</span>
        }
    </div>
    </>
  )
}
