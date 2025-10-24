import { useState } from "react"
import SignUp from "./SignUp"
import SignIn from './SignIn';


export default function SignInUp({handelClose , setToken , submit}) {

let [content , setContent] = useState('signUp');
let [active , setAtive]    = useState({signup : true , signIn : false});

let handelReturn = ()=> {
    switch (content) {
    case 'signUp' : return <SignUp content={content} setToken={setToken} close={handelClose} submit={submit}/>
    case 'logIn'  : return <SignIn content={content} setToken={setToken} close={handelClose} submit={submit}/>
    }
}

const handedelSignUpBtn = () => {
    setContent('signUp')
    setAtive({signup : true , signIn : false})
}

const handedelSignInBtn = () => {
    setContent('logIn')
    setAtive({signup : false , signIn : true})
}


  return (
    <div className="sign-prombet invisible fixed w-full h-full right-0 top-0 left-0  z-30 cursor-pointer flex justify-center items-center">
        <div className="over-lay absolute z-40 w-full h-full bg-[rgba(0,0,0,.5)]" onClick={handelClose}></div>

        <div className="content-container bg-Whitee max-w-[600px] w-full rounded-sm py-5 px-3 relative z-50">

            <div className="content-header flex">
                <button 
                    className="flex-1 capitalize text-md font-medium py-2 border-b-[3px] border-solid border-b-transparent"
                    style={{
                        borderBottomColor : active.signup && 'rgb(255 95 0)',
                        color             : active.signup && 'rgb(255 95 0)'
                    }}
                    onClick={handedelSignUpBtn}
                    aria-pressed={active.signup}
                >
                    create an account 
                </button>

                <button 
                    className="flex-1 capitalize text-md font-medium py-2 border-b-[3px] border-solid border-b-transparent"
                    style={{
                        borderBottomColor : active.signIn && 'rgb(255 95 0)',
                        color             : active.signIn && 'rgb(255 95 0)'
                    }}
                    onClick={handedelSignInBtn}
                    aria-pressed={active.signIn}
                >
                    login
                </button>
            </div>

            <div className="content mt-3">
                {handelReturn()}
            </div>

        </div>
    </div>
  )
}
