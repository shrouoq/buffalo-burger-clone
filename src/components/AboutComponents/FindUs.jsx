import { useState } from "react"

const adresses = [
    {
        place : 'elmanyl',
        address : 'المنيل - المنيل'
    },
    {
        place : 'alexandria',
        address : 'سيتى سنتر الاسكندرية'
    },
    {
        place : 'madinty',
        address : 'اوبن اير مول - مدينتى'
    }
]

export default function FindUs() {

    const[address , setAddress] = useState('');

    const handelChange = (e) =>{
        const val= e.target.value
        const selected = adresses.filter(add => add.place === val)
        setAddress(selected[0].address);
    }

  return (
    <div className="container mx-auto">
      <div className="text-box text-center pb-5 mb-5 border-b-[5px] border-solid border-b-orangee">
        <h2 className="text-orangee text-[60px] font-press">FIND US</h2>
        <p className="text-Whitee text-[20px]">Buffalo Burger is constantly expanding to deliver an unmatched gourmet experience at every customers’ doorstep. Today, we take pride in boasting flagship restaurants across Egypt, bringing the ‘real deal’ closer to your home. Looking for the branch closest to you? Find us wherever you are</p>
      </div>

      <div className="search-box flex flex-col gap-5 items-center">

        <select id="add-box" onChange={handelChange} className="max-w-[500px] w-full rounded-sm p-3 capitalize">
            <option value="disabled" className="capitalize text-gray-400">find us</option>
            {
                adresses.map(add => <option key='add.place' value={add.place} className="capitalize">{add.place}</option>)
            }
        </select>

        <p className="text-Whitee font-bold cairo text-xl">{address}</p>

      </div>
    </div>
  )
}
