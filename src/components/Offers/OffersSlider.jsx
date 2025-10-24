import { useSelector } from 'react-redux';
import { useEffect , useState } from 'react';
import { NavLink } from 'react-router-dom';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//  Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';

// required modules
import { FreeMode, Pagination } from 'swiper/modules';



export default function OffersSlider() {
  const [offers , setOffers] = useState([]);
  const offersData = useSelector(state => state.DataSlice.data)

  const BreakPoints = {
                        0 : {slidesPerView : 1},
                        450 : {slidesPerView : 2},
                        767 : {slidesPerView :3},
                        992 : {slidesPerView : 4}
                      }

  useEffect(() => {
    if(offersData.length > 0){
      const selected = offersData.filter(el => el.category === 'offers');
      setOffers(selected)
    }
  },[offersData])

  return (
    <>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper offers-swiper"
        breakpoints={BreakPoints}
      >
        {
          offers.map((offer,index) => (
            <SwiperSlide key={index}>
                <NavLink 
                  to={`/productDetails/${offer.id}`} 
                  className='bg-no-repeat bg-center bg-cover w-full h-full block'
                  style={{
                    backgroundImage : `url(${offer.OfferPic})`
                  }}
                >
                </NavLink>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
