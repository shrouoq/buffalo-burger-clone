import { useSelector } from "react-redux"
import OffersHeader from "./OffersHeader";
import { useState } from "react";
// ********components********
import Chooice from "./Chooice";
import ExstraItems from "./ExstraItems";
import Drink from "./Drink";


export default function OffersContent({id,orderItem,setOrderItem}) {

  const [content , setContent] = useState('choice 1');
  const {data}                 = useSelector(state => state.DataSlice);
  const itemChoosed            = data.filter(el => el.id === id);
  const chooices               = [...(new Set(itemChoosed[0].offerOptiopns.map(el => el.choose)))];

  const handelChoosedOffer = (el) => {
  
     if(orderItem.offerChoices.length !== 0){
        const existelement = orderItem.offerChoices.find(offer => offer.choose === el.choose);
        if(existelement){
          const index = orderItem.offerChoices.indexOf(existelement)
          orderItem.offerChoices[index] = el
        }else{
          orderItem.offerChoices.push(el)
        }
     }else{
      orderItem.offerChoices.push(el)
     }
     setOrderItem(prev => ({
      ...prev ,
      weight : 0,
      compo  : '',
      OffExstraPrice: orderItem.offerChoices.reduce((acc , el) => acc + parseInt(el.price) ,0),
     }))
  }

  const handelContent = () => {
      if(content === 'exstra'){
        return <ExstraItems itemChoosed={itemChoosed} setOrderItem={setOrderItem}/>
      }else if(content === 'drink'){
        return <Drink  itemChoosed={itemChoosed} setOrderItem={setOrderItem}/>
      }else{
        return <Chooice itemChoosed={itemChoosed} orderItem={orderItem} content={content} handelChoosedOffer={handelChoosedOffer} />
      }
  }
  
  return (
    <div>
      {/* offers buttons */}
      <div className="Btns bg-backgroundColor flex justify-center gap-5 py-5">
        <OffersHeader chooices={chooices} itemChoosed={itemChoosed} setContent={setContent}  />
      </div>

      <div className="content">
          {handelContent()}
      </div>
      
    </div>
  )
}
