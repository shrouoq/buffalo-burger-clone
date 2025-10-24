/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
// ******redux actions******
import { getData } from "../Toolkit/Slice/DataSlice";
// ******components******
import ProductDetailsFooter from "../components/Footer/ProductDetailsFooter";
import CompoOptions from "../components/ProuctDetailsSmallComponents/CompoOptions";
import BreadContaiiner from "../components/ProuctDetailsSmallComponents/BreadContaiiner";
import WeightsContainer from "../components/ProuctDetailsSmallComponents/WeightsContainer";
import SandwichDetails from "../components/ProuctDetailsSmallComponents/SandwichDetails";
import Loader from '../components/Loading/Loadre';
// ******toolkit actions******
import { addItem } from "../Toolkit/Slice/SelectedItemsSlice";
import SizeCom from "../components/ProuctDetailsSmallComponents/SizeCom";
import OffersContent from "../components/ProuctDetailsSmallComponents/Offers/OffersContent";


export default function ProductDetails() {

  const [loading , setLoading]           = useState(true);
  const [selectedItem , setSelectedItem] = useState([]);
  const [orderItem , setOrderItem]       = useState({
                                                    sandwich           : null,
                                                    quantity           : 1,
                                                    weight             : 150,
                                                    compo              : 'Choose Sandwich Only',
                                                    bread              : 'white bread',
                                                    choosedDrink       : '',
                                                    wExstraPrice       : 0,
                                                    compoPrice         : 0,
                                                    offerChoices       : [],
                                                    drink              : '',
                                                    exstraChooices     : '',
                                                    exstraChooicesPrice:0,
                                                    OffExstraPrice     : 0,
                                                    total              : 0
                                                  });                                      

  const {data} = useSelector(state => state.DataSlice);
  
  const param       = useParams();
  const dispatch    = useDispatch();
  const id          = param.id;
  const navigate    = useNavigate();
  

  const totalPrice = (parseInt(orderItem.sandwich?.price) || 0) + (parseInt(orderItem.wExstraPrice) || 0) + (parseInt(orderItem.compoPrice) || 0) + (parseInt(orderItem.OffExstraPrice) || 0) + (parseInt(orderItem.exstraChooicesPrice) || 0)


  const handelWeight = (w) => {
     setOrderItem({...orderItem , weight : w.weight , wExstraPrice : w.exstraPrice})
  }

  const handelCompoClick = (el) => {
    setOrderItem(prev => ({...prev , compo : el.comboName , compoPrice : el.comboPrice}))
  }

  const handleAddToCart = () => {
    const itemToAdd = {...orderItem , total : totalPrice}
    dispatch(addItem(itemToAdd));
    navigate('/CardItems')
  }

  useEffect(() => {
    if(!data || data.length === 0){
      dispatch(getData())
    }
  },[data, dispatch])

  useEffect(() => {
    let selected = data.filter(p => p.id === id);
    setSelectedItem(selected);
  },[data,id])

   useEffect(() => {
    if(selectedItem.length > 0){
      setOrderItem(prev => ({...prev , sandwich : selectedItem[0] , drink : selectedItem[0].drink && selectedItem[0].drink[0]}))
    }
  },[selectedItem])

  useEffect(() => {
    const load = () => {setLoading(false)}
    if(data && data.length > 0){
      setTimeout(() => load() , [1000])
    }
    return clearTimeout(load)
  },[data])

  if(loading){
    return <Loader />
  }

  return (
    <>
      {
        selectedItem.length !== 0 && (
          selectedItem.map(el => (

            <div className="product-container mt-[120px] mb-[200px] max-lg:mt-[110px]">

              {/* sandwish details */}
              <SandwichDetails el={el} />

              {/* combo details */}
              
              {
              selectedItem[0].category !== 'offers' ?
              <div className="combo-box flex flex-col items-center py-8">

                {/* weights container */}
                <div>
                  {
                    (selectedItem[0].size !==null || selectedItem[0].weight !== null) ? <h2 className="text-black text-2xl font-bold text-center mb-5 uppercase ">size</h2> : ''
                  }
                  {selectedItem[0].category === 'burger sandwich' && (
                      <div className="weight flex max-xs:flex-col gap-16 max-xs:gap-5 mb-5">
                        {
                          selectedItem[0].weight.map(w => (
                            <WeightsContainer w={w} handelWeight={() => handelWeight(w)}  orderItem={orderItem}/>
                          ))
                        }
                      </div>
                    )
                  } 
                  {
                    selectedItem[0].size !== null && selectedItem[0].size.map(s => <SizeCom size={s}/>)
                  }
                </div>

                {/* bread container */}
                {
                  selectedItem[0].bread !== null && 
                  <div className="py-11 my-8 bg-lightGray w-full">
                    <h2 className="text-black text-2xl font-bold text-center uppercase mb-5">bread</h2>
                    <div className=" flex justify-center items-center max-xs:flex-col gap-10 max-xs:gap-5">
                      {
                        selectedItem[0].bread?.map(b => (
                          <BreadContaiiner b={b} setOrderItem={setOrderItem} orderItem={orderItem} />
                        ))
                      }
                    </div>
                  </div>
                }
                  
                {/* combo options box */}
                  <div>
                    {selectedItem[0].combo && <h2 className="text-black text-2xl font-bold text-center uppercase mb-5">compo options</h2>}
                    <div className="combo-options max-w-[800px] w-full px-3 grid grid-cols-1 gap-7 md:grid-cols-2">
                        {
                          selectedItem[0].combo?.map(el => (
                            <CompoOptions el={el} handelCompoClick={() => handelCompoClick(el)} orderItem={orderItem} />
                          ))
                        }
                    </div>
                  </div>
                  
              </div>
              :
              <OffersContent id={id} orderItem={orderItem} setOrderItem={setOrderItem}/>
              }

            </div>
          ))
        )
        
      }
      <ProductDetailsFooter handleAddToCart={handleAddToCart} total={totalPrice}/>

      
    </>
  )
}
