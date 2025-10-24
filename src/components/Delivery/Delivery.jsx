import { NavLink } from 'react-router-dom';
import Mobile from '../../assets/buffalo-app-CTA-img.png';
import Stars from '../../assets/footer-stars.png';
import Play from '../../assets/Google-play.svg';
import Store from '../../assets/App-store.svg';


export default function Delivery() {
  return (
    <div className='border-b-[1px] border-solid border-b-lightGray overflow-hidden'>

        {/* ******top****** */}
        <div className=" bg-cover bg-no-repeat bg-blend-multiply [background-image:linear-gradient(to_right,rgb(243,120,48),rgb(243,120,48)),url('https://buffalonlineorderingapp.s3.eu-west-1.amazonaws.com/static_images/footer-texture.png')] text-white py-10">

                <div className="container relative mx-auto flex max-lg:justify-center max-lg:text-center">
                    <p className='text-[40px] font-medium max-xs:text-[20px]'>
                        Revolutionize Your<br />Food Delivery Experience
                    </p>
                    <img src={Mobile} alt="mobile" className='w-[280px] h-[550px] absolute top-[-40px] right-[100px] max-lg:hidden'/>
                </div>

        </div>

        {/* ******bottom****** */}
        <div className="bg-backgroundColor">
            <img src={Stars} alt="stars" />

            <div className="container mx-auto py-10 flex flex-col max-lg:items-center max-lg:text-center">
                <h2 className='text-orangee font-bold text-[35px] max-lg:text-[25px]'>Download our mobile application now!!!</h2>
                <p className='text-Whitee max-w-[500px] text-[18px] max-lg:text-[15px] max-lg:pt-5'>Supercharge your experience with our mobile app! Unbeatable deals, personalized food suggestions, easy address management, loyalty points, and a user-friendly interface.</p>
                <div className="apps pt-5 flex gap-4 max-lg:justify-center">
                    <NavLink to='https://play.google.com/store/apps/details?id=com.thebuffaloburger&pli=1'>
                        <img src={Play} alt="google-play" className='w-[200px]' />
                    </NavLink>

                    <NavLink to='https://apps.apple.com/us/app/buffalo-burger/id1661414221'>
                        <img src={Store} alt="app-store" className='w-[180px]'/>
                    </NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

