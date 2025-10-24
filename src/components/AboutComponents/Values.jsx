// ******pictures******
import Training from '../../assets/about_training.webp';
import Badge from '../../assets/values-bage.webp';
import guests from '../../assets/guests.webp';
import Fluent from '../../assets/fluent-burger.webp';
import smallBadge from '../../assets/small-badge.webp';
import community from '../../assets/community.webp';
import quality from '../../assets/quality.webp';
import staff from '../../assets/our_staff.webp';

export default function Values() {
  return (
    <div className="container mx-auto">

        {/* ***********training information box*********** */}
      
        <div className='training-box border-b-[5px] border-solid border-b-orangee flex flex-col items-center pb-10 mb-10'>
            <h2 className="text-orangee text-[60px] font-press">our values</h2>

            <p className="text-Whitee mb-5">Buffalo Burger started with four brother who believed that</p>

            <div className="training flex flex-col items-center relative w-full">

                <img src={Training} alt="traning photo" aria-label='training photo in valus section' loading='lazy' className='max-w-[700px] w-full max-h-[550px] h-full rounded-sm'/>
                <img src={Badge} alt="badge photo" aria-label='badge photo in valus section' loading='lazy' className='absolute left-[50%] max-lg:hidden' />
                <div className="text absolute z-20 top-[50%] left-[30%] bg-black text-Whitee p-10 rounded-sm max-w-[700px] flex flex-col gap-3 max-lg:relative max-lg:mt-3 max-lg:left-0 max-lg:right-0">
                    
                    <h2 className='font-press text-[36px] text-orangee'>That's why:</h2>

                    <div className='flex gap-2 items-center'>
                        <span className='large-circle'>
                            <span className='small-circle'></span>
                        </span>
                        <p className='flex-1'>We make sure to give back to our communities and strive to decrease waste.</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='large-circle'>
                            <span className='small-circle'></span>
                        </span>
                        <p className='flex-1'>We donate and collaborate with several charitable organizations, and deploy yearly CSR campaigns to ensure we give back to</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <span className='large-circle'>
                            <span className='small-circle'></span>
                        </span>
                        <p className='flex-1'>We make sure to recycle as much as we can and work with several entities to decrease any food waste.</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <span className='large-circle'>
                            <span className='small-circle'></span>
                        </span>
                        <p className='flex-1'>Not only that, but we make sure to always use the best ingredients with the least amount of preservatives to give our Buffalo Addicts the best quality of food.</p>
                    </div>  

                </div>
                
            </div>
        </div>

        {/* ***********blocks box*********** */}

        <div className="blocks">
            <div className='flex flex-col gap-5 max-lg:items-center'>
                
                <div className="box flex justify-start gap-5">
                    <div className="text flex flex-col justify-end max-w-[250px] ">
                        <h2 className='text-orangee font-normal text-[27px] max-lg:text-[18px]'>Our Guests, Our #1 Priority</h2>
                        <p className='text-Whitee max-lg:text-xs'>We’re committed to make sure that every guest has a smile on their faces with every bite of our burgers.</p>
                    </div>
                    <img src={guests} alt="guests photo" aria-label='guests photo'  loading='lazy' className='w-[230px] h-[300px] max-lg:w-[150px] max-lg:h-[200px]'/>
                </div>

                <div className="box flex justify-end  gap-5">
                    <img src={community} alt="guests photo" aria-label='guests photo'  loading='lazy' className='w-[230px] h-[300px] max-lg:w-[150px] max-lg:h-[200px]'/>
                    <div className="text flex flex-col justify-end max-w-[250px]">
                        <h2 className='text-orangee font-normal text-[27px] max-lg:text-[18px]'>Our Community, Our Purposey</h2>
                        <p className='text-Whitee max-lg:text-xs'>We are driven by a genuine desire to be part of something bigger, proudly making a positive impact in our communities.</p>
                    </div>
                </div>

                <div className="box flex justify-start gap-5">
                    <div className="text flex flex-col justify-end max-w-[250px]">
                        <h2 className='text-orangee font-normal text-[27px] max-lg:text-[18px]'>Our Passion, Our Key Ingredient</h2>
                        <p className='text-Whitee max-lg:text-xs'>We bring a sense of purpose, passion, drive, and enthusiasm to everything we do, and we always have a bit of fun along the way.</p>
                    </div>
                    <img src={Fluent} alt="guests photo" aria-label='guests photo'  loading='lazy' className='w-[230px] h-[300px] max-lg:w-[150px] max-lg:h-[200px]'/>
                </div>

                <div className="box flex justify-end gap-5">
                    <img src={quality} alt="guests photo" aria-label='guests photo'  loading='lazy' className='w-[230px] h-[300px] max-lg:w-[150px] max-lg:h-[200px]'/>
                    <div className="text flex flex-col justify-end max-w-[250px]">
                        <h2 className='text-orangee font-normal text-[27px] max-lg:text-[18px]'>Our Quality, Our Pride</h2>
                        <p className='text-Whitee max-lg:text-xs'>Best-of-the-Best. We’re always working at being the best we can be, and going one step above! That’s why we continuously invest in our quality control measures and hygiene principles to apply the strictest standards of food safety as well as sourcing the very best ingredients.</p>
                    </div>
                </div>

                <div className="box flex justify-start gap-5">
                    <div className="text flex flex-col justify-end max-w-[250px]">
                        <h2 className='text-orangee font-normal text-[27px] max-lg:text-[18px]'>Our Menu, Our Compass</h2>
                        <p className='text-Whitee max-lg:text-xs'>We make sure that our menu items fill the cravings of the market, and make sure to always stay ahead on the latest food trends, ensuring that no matter your diet, you’ll find the perfect meal in our menu.</p>
                    </div>
                    <img src={smallBadge} alt="guests photo" aria-label='guests photo'  loading='lazy' className='w-[230px] h-[120px] max-lg:w-[150px]'/>
                </div>

                <div className="box flex justify-end gap-5">
                    <img src={staff} alt="guests photo" aria-label='guests photo'  loading='lazy' className='w-[230px] h-[300px] max-lg:w-[150px] max-lg:h-[200px]'/>
                    <div className="text flex flex-col justify-end max-w-[250px]">
                        <h2 className='text-orangee font-normal text-[27px] max-lg:text-[18px]'>Our Team, Our Key Ingredient</h2>
                        <p className='text-Whitee max-lg:text-xs'>We embrace each employee as a valued member of our family. That’s why we work to bring out the best in one another.</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    
  )
}
