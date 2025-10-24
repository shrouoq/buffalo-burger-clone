// ******Pics******
import Jack from '../../assets/BM-jack.webp';
import Keto from '../../assets/Keto.png';
import Branches from '../../assets/44-branches.png';
import Time from '../../assets/Since-2008.png';

export default function Story() {
  return (
    <div>
        <div className="container mx-auto flex items-cente max-lg:flex-col max-lg:gap-5 max-lg:justify-center max-lg:text-center">
      
            {/* text box */}
            <div className="text flex-1">
                <h2 className="text-orangee font-press text-[36px] max-sm:text-[24px] uppercase">our story</h2>

                <p className="text-Whitee text-lg max-sm:text-sm">
                    It all started in 2008, with four passionate brothers who shared one big appetite, an obsession with juicy burgers and a demanding palate.
                </p>

                <p className="text-Whitee text-lg py-7 max-sm:text-sm">
                    They focused their energy on challenging the conventional idea that food served fast must be “junk-food” and instead worked on refining it to become an elevated culinary adventure where the ingredients are natural and the taste is spectacular.
                </p>

                <p className="text-Whitee text-lg max-sm:text-sm">
                    This vision has won over the Egyptian market, and now, Buffalo Burger operates over 44 branches in Egypt, as well as launching across the MENA region.
                </p>

                <h2 className='text-orangee font-press text-[60px] py-3 max-sm:text-[24px]'>WHERE WE ARE NOW</h2>

                <div className="box flex max-lg:justify-center gap-16 max-md:gap-10">
                    <img src={Time} alt="" loading='lazy' className='w-[80px] h-[80px] object-contain'/>
                    <img src={Branches} alt="" loading='lazy' className='w-[80px] h-[80px] object-contain'/>
                    <img src={Keto} alt="" loading='lazy' className='w-[80px] h-[80px] object-contain'/>
                </div>
            </div>

            {/* picture box */}
            <div className="pic flex-1 flex justify-center items-center">
                <img src={Jack} alt="burger sandwich photo" aria-label="sandwich photo in story section" loading="lazy" className='max-md:w-[200px]' />
            </div>

        </div>

    </div>
  )
}
