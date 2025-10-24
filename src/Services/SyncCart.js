// import { supabase } from "../components/Supabase/SubapaseClient";


// export default function mergeCards (a=[] , b=[]){
//     const map = new Map;
//     const mergedItems = [...a,...b];
//     mergedItems.forEach( item => {
//         const qty = item.quantity?? 1
//         map.set(item.id , {...item , quantity:(map.get(item.id)?.quantity?? 0) + qty})
//     })

//     return [...map.values()] 
// }