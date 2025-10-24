import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import Area from "../components/BranchArea/Area";
import { getBranches } from "../Toolkit/Slice/Branches";


export default function Branches() {
const {data} = useSelector(state => state.BranchesSlice)
const dispatch = useDispatch()

console.log(data);


useEffect(() => {
    dispatch(getBranches())
},[dispatch])

  return (
    <div className="bg-backgroundColor text-Whitee mt-[120px] pt-8 min-h-[100vh]">
       
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data.map(el => <Area key={el.id} ele={el} />)
            }
        </div>

    </div>
  )
}
