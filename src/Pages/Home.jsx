import { useSelector } from "react-redux";
// ******components******
import Offers from "../components/Offers/Offers";
import TopSelling from "../components/TopSelling/TopSelling";
import Delivery from '../components/Delivery/Delivery'
import Loader from "../components/Loading/Loadre";

export default function Home() {
  const loading = useSelector(state => state.DataSlice.loading)
  
  if(loading){
    return <Loader />
  }

  return (
    <div className="">
      <Offers />
      <TopSelling />
      <Delivery />
    </div>
  )

}
