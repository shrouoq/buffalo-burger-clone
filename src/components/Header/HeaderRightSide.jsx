import { supabase } from '../Supabase/SubapaseClient';
// *******icons*******
import { MdOutlineShoppingBasket } from 'react-icons/md';
// *******components*******
import ItemsSideBar from './Sides/ItemsSideBar';



export default  function HeaderRightSide({handleOpenlSign , token , setToken}) {
    
    const handelOpenSidebar = () => {
        document.querySelector('.sideBar.right').classList.add('active');
    };

    const handelCloseSidebar = () => {
        document.querySelector('.sideBar.right').classList.remove('active');
    };

    const handelLogOut = async() =>{
        const { error } = await supabase.auth.signOut({ scope: 'local' });
        localStorage.removeItem('sb-token');
        setToken(null)
    }
    

  return (
    <div className="right flex-1 font-semibold flex justify-end gap-3">

        {/* signUp button */}
       
            {
                token === null && <button onClick={handleOpenlSign} className="max-md:hidden" aria-label='sign up button'>Create an account</button>
            }
      
    
        {/* signIn button */}
        
            {
                token === null && <button onClick={handleOpenlSign} className="max-md:hidden" aria-label='login button'>Login</button>
            }
            
        {/* log out button */}
        
            {
                token !== null && <button onClick={handelLogOut} className="max-md:hidden" aria-label='login button'>Log out</button>

            }
        {/* open&close selected items sidebar */}
        <button className='max-md:block hidden text-2xl w-[38px] h-[38px] rounded-full bg-orangee'
                aria-label='open items sidebar button'
                onClick={handelOpenSidebar}
        >
            <MdOutlineShoppingBasket className='mx-auto' />
        </button>

        {/* sidebar */}
        <ItemsSideBar closeSidebar = {handelCloseSidebar}/>
        

    </div>
  )
}
