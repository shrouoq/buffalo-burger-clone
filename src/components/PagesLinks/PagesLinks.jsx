import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

// import pictures
import Burger from '../../assets/burger.webp';
import Chicken from '../../assets/chicken.webp';
import Appet from '../../assets/appet.webp';
import Suce from '../../assets/suce.webp';
import Dessert from '../../assets/desserts.webp';
import Drinks from '../../assets/drinks.webp';
import Stuff from '../../assets/stuff.webp';
import Offers from '../../assets/offers.webp';


export default function PagesLinks() {

    const ref      = useRef();
    const location = useLocation();
    let pathName   = location.pathname;

    let sections = [ {sec:'offers' , img: Offers}
                    ,{sec:'burger sandwich' , img: Burger} 
                    ,{sec:'chicken sandwich', img:Chicken} 
                    ,{sec:'appetizers', img:Appet} 
                    ,{sec:'sauces', img:Suce} 
                    ,{sec:'dessert' , img:Dessert} 
                    ,{sec:'drinks' , img:Drinks} 
                    ,{sec:'buff stuff' , img:Stuff}]

    useEffect(() => {
       if(pathName == '/'){
         let windowScroll = () => {
            let scrolTop = window.pageYOffset;
            if(scrolTop > 350){
                ref.current.classList.add('sticky');
            }else{
                ref.current.classList.remove('sticky');
            }
        }
        window.addEventListener('scroll',windowScroll);
        return (() => window.removeEventListener('scroll',windowScroll))
       }
    },[pathName])

    useEffect(() => {
        if(pathName !== '/'){
            ref.current.classList.add('sticky');
       }else{
        ref.current.classList.remove('sticky');
       }
    },[pathName])


  return (
    
    <div ref={ref} className="page-links z-20 bg-backgroundColor mt-[-5px] py-3 flex justify-center gap-2 flex-wrap">
      {
        sections.map((section,index) => {
            return (
                <div key={index} className="linkk w-[80px] max-sm:w-[60px]">
                    <Link to={`/menu#${section.sec.replace(/\s+/g, "-")}`} className='linkk w-full h-full relative transition-opacity duration-700 ease-in-out after:absolute after:contents-[] after:w-full after:h-full after:right-0 after:bottom-0 after:bg-[rgba(0,0,0,.4)] after:rounded-full after:opacity-0 hover:after:opacity-[1]'>
                      <img src={section.img} alt={`${section.sec} image`} className="w-full h-full"/>
                    </Link>
                </div>
            )
        })
      }
    </div>
  )
}
