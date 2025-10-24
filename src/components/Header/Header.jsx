// *****pictures*****
import Logo from '../../assets/logo.svg';
import EgLogo from '../../assets/eg-flag.png'

// ******icons******
import { FaPen } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

// *****React*****
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// *****components*****
import MyMap from '../Map/MyMap';
import SignInUp from '../SignPrompet/SignInUp';
import HeaderLeftSide from './HeaderLeftSide';
import HeaderCenter from './HeaderCenter';
import HeaderRightSide from './HeaderRightSide';
import { supabase } from '../Supabase/SubapaseClient';


export default function Header() {

    const Location = useLocation();
    const navigate = useNavigate();
    
    
    const [openBranch , setOpenBranch] = useState(false);
    const [openMap , setOpenMap]       = useState(false);
    const [token , setToken]           = useState(null)
    

    const handelBranchBoxClick = () => {
        setOpenBranch(prev => !prev)
    }

    const handelOpenMap = () => {
        setOpenMap(true)
    } 

    const handeOpenlSign = () => {
        document.querySelector('.sign-prombet').style.visibility = 'visible';
        document.querySelector('.sideBar').classList.remove('active');
    }

    const handelCloseSign = useCallback(() => {
        document.querySelector('.sign-prombet').style.visibility = 'hidden';
    },[])

    const handelSubmitSignForm = () => {
        navigate((Location.state.to) !== '/checkout' ? '/menu' : '/checkout');
    }

    useEffect(()=> {
        const getUser = async() => {
            const {data , error} = await supabase.auth.getUser();
            if(!error){
                setToken(data?.user || null)
            }
        }
        getUser()
    },[])

  return (

    <div>
        {/* ******Header****** */}
        <div className=" bg-backgroundColor fixed top-0 left-0 right-0 w-full text-Whitee h-[120px] z-30 pt-2">
            
            {/* ******navBar****** */}
            <div className="container mx-auto flex items-center">

                <HeaderLeftSide Elogo={EgLogo} handleOpenlSign={handeOpenlSign}/>
                
                <HeaderCenter Logo={Logo} />
                
                <HeaderRightSide handleOpenlSign={handeOpenlSign} token={token} setToken={setToken}/>
                
            </div>

            {/* branch field */}
            <p className='flex justify-center items-center gap-2 pt-3 capitalize font-medium text-[15px] cursor-pointer'
                onClick={handelBranchBoxClick}
            >
                <span><FaPen /></span>
                <span>delivery from all (general branch)</span>
                <span>|</span>
                <span className='text-[20px]'>
                    {
                        openBranch ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                    }
                </span>
            </p>

            {/* ******add adress box****** */}

            { openBranch &&
            <div 
                className="add-address-box text-md font-medium capitalize bg-Whitee cursor-pointer rounded-sm px-4 py-2 text-black absolute bottom-[-30px] left-[50%] translate-x-[-50%] "
                onClick={handelOpenMap}
            >
                + add new address

            </div>
            }
            
        </div>

        {/* ****** Map ****** */}
        {openMap && <MyMap setOpenMap={setOpenMap} />}

        {/* ******Sign in/up****** */}
        <SignInUp handelClose={handelCloseSign}  setToken={setToken} submit={handelSubmitSignForm}/>

    </div>
  )
}
