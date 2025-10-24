import { NavLink} from 'react-router-dom';
import ItemCard from './../Cards/ItemCard';
import OffersSlider from '../Offers/OffersSlider';

export default function Section({category,data}) {

 let selectedData = data.filter(p => p.category === category)
 const id = category.replace(/\s+/g, "-");

 
  return (
    <div id={id} className=' pb-10 scroll-mt-52'>
      
        <div className="section-tit">
            <h2 className='font-press text-[36px] lg:text-[60px] text-orangee w-fit mx-auto mb-5 uppercase tracking-[2px] '>{category}</h2>
        </div>

        <div className="products">
            {
              category === 'offers' ? <OffersSlider /> : 
              <div className='container mx-auto mb-5 flex justify-center gap-11 flex-wrap'>
                {
                  selectedData.map(p =>  <NavLink to={`/productDetails/${p.id}`} key={p.id}><ItemCard item={p}/></NavLink>)
                }
              </div>
            }
        </div>


    </div>
  )
}
