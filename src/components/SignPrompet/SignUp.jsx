import { useState } from "react"
// *****supabase*****
import { supabase } from './../Supabase/SubapaseClient';

export default function SignUp({content , close , setToken , submit}) {
    // (1) form controllable
    const [formData , setFormData] = useState({
        userName : '',
        email : '',
        password : ''
    });
    const [loading , setLoading]   = useState(false);
    const [error , setError]       = useState('');

    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        
    }

    const handelSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const {userName , email , password} = formData

        try{
            // connect formData to SB 
            const {data , error} = await supabase.auth.signUp({
                email,
                password
            })
            // store  user token in localstorage
            localStorage.setItem('sb-token' , data.session.access_token);
            
            if(error){
                throw new Error(error.message)
            }
            // store user information in clients table in database
            const {error : clientsError} = await supabase.from('clients')
            .upsert({
                id: data.user.id,
                userName,
                email : data.user.email
            } , {onConflict : 'id' , returning : 'minimal'});

            if(clientsError){
                throw new Error(clientsError.message)
            }
        // error handling    
        }catch(err){ 
            setError(err.message)
        }finally{
            setLoading(false)
        }

        setToken(localStorage.getItem('sb-token'))

        setFormData( {
            userName : '',
            email : '',
            password : ''
        })

        close();
        submit();
    }

  return (
    <div>
        <form 
            id={content}
            onSubmit={handelSubmit}
        >
            {/* user name feild */}
            <div className="flex flex-col gap-2">
                <label htmlFor={`user-name/${content}`} className="capitalize font-medium">user name</label>
                <input 
                    type='text' 
                    id={`user-name/${content}`} 
                    className="py-1 border-[1px] border-solid border-orangee w-full rounded-[5px]"
                    value={formData.userName}
                    name="userName"
                    onChange={handelChange}
                    required
                />
            </div>
            
            {/* email adress feild */}
            <div className="flex flex-col gap-2 my-3">
                <label htmlFor={`email/${content}`} className="capitalize font-medium">email</label>
                <input 
                    type='email' 
                    id={`email/${content}`} 
                    className="py-1 border-[1px] border-solid border-orangee w-full rounded-[5px]"
                    value={formData.email}
                    name="email"
                    onChange={handelChange}
                    required
                />
            </div>

            {/* password field */}
            <div className="flex flex-col gap-2 mb-3">
                <label htmlFor={`pass/${content}`} className="capitalize font-medium">Password</label>
                <input 
                    type='password' 
                    id={`pass/${content}`} 
                    className="py-1 border-[1px] border-solid border-orangee w-full rounded-[5px]"
                    value={formData.password}
                    name="password"
                    onChange={handelChange}
                    required
                />
            </div>

            <button 
                type="submit"
                className="w-full py-2 rounded-[5px] bg-orangee text-Whitee uppercase font-medium"
                disabled={loading}
            >
                create an account
            </button>

            {
                error && <p className="w-full p-3 mt-3 text-center font-semibold capitalize text-[15px] text-[red] rounded-sm border-[1px] border-solid border-[red]">{error}</p>
            }
        </form>
    </div>
  )
}
