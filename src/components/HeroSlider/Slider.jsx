//Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

//Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

//required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

// large media pictures
import Buff from '../../assets/Buff.png';
import Mattress from '../../assets/Mattress.png';
import Match from '../../assets/Match.png';
import Hummer from '../../assets/Hummer.png';

// small media pictures
import MBuff from '../../assets/MBuff.png';
import MMattress from '../../assets/MMattress.png';
import MHummer from '../../assets/MHummer.png';
import MMatch from '../../assets/MMatch.png';

import { useMemo } from 'react';



export default function Slider({data}) {
  
  let offers = ["Chicken Mattress","Mix N' Match","Buff One","Hammer Combo - 200gm"];
  let items = [];
  
  let images = useMemo(() => ({Buff,Mattress,Match,Hummer}),[]);
  let Mimages = useMemo(() => ({MBuff,MMattress,MMatch,MHummer}),[]);
  

  for(let i=0;i<offers.length;i++ ){
    const foundProducts = data.filter(product => product.name === offers[i] && product.section === 'offers');
    items.push(...foundProducts);
  }
  
  return (
    <>
      <Swiper
        pagination={{type: 'progressbar'}}
        autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper hero"
      >
        
        {
          items.length !== 0 && items.map(p => (
            <SwiperSlide key={p.id}>
                <NavLink to={`productDetails/${p.id}`} 
                         className='nav-link' 
                         style={{backgroundImage : window.innerWidth <= 767 ? `url(${Mimages['M'+p.sliderPic]})` : `url(${images[p.sliderPic]})`}}
                >
                </NavLink>
              </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
