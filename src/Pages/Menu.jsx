import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// redux actions
import {getData} from '../Toolkit/Slice/DataSlice'

import Section from '../components/MenuSection/Section';
import Loader from '../components/Loading/Loadre'


export default function Menu() {

let {data , loading} = useSelector(state => state.DataSlice)
let [categories , setCategories ] = useState([]);

const dispatch = useDispatch();
let location = useLocation();

useEffect(() => {
    dispatch(getData())
},[dispatch])

useEffect(() =>{
  let categs = data.map(p => p.category)
  categs = [...(new Set(categs))]
  setCategories(categs)
},[data])

// ****************************************handel scrolling********************************************

let id = location.hash.replace('#' , '')
let sec = document.getElementById(id);
if(sec){
  sec.scrollIntoView({behavior : 'smooth'})
}

  return (
      <div className='mt-[200px] py-12'>
        {
          loading ? <Loader /> : 
          categories.map((category , index) => <Section key={index} category={category} data={data}/>)
        }
      </div>
  )
}
