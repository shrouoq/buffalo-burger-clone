import Map from "./Map";
import { MdDeliveryDining } from 'react-icons/md';

export default function MyMap({setOpenMap}) {

 const handelCloseMap = () => {
    setOpenMap(false)
 }

  return (
    <div className="flex justify-center  w-full h-[100vh] fixed right-0 left-0 z-[1000]">

      {/* **********overlay********** */}
      <div className='fixed w-full h-full bg-black/50 top-0 right-0 cursor-pointer' onClick={handelCloseMap}></div>

      {/* **********content container********** */}
      <div className='bg-Whitee w-[700px] h-[500px] relative rounded-[15px] overflow-y-auto p-2'>

        {/* **********buttons********** */}
        <div className='btns flex justify-center items-center h-[50px] text-backgroundColor'>

          <button className="flex items-center gap-1 uppercase text-xs font-medium">
            <span className="text-[20px]"><MdDeliveryDining /></span>
            <span>delivery</span>
          </button>

        </div>

        {/* **********content********** */}
        <div className="content h-[450px]">
          <Map />
        </div>
      </div>

    </div>
  )
}
