import { useState } from "react"
import { supabase } from "../Supabase/SubapaseClient";

export default function SignIn({content , close , setToken , submit}) {

const [loading , setLoading]   = useState(false);
const [error , setError]       = useState('');
const [formData , setFormData] = useState({email : '' , password : ''});

const handleChange = (e) => {
  setFormData ({
    ...formData,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = async(e) => {
  e.preventDefault();

  setLoading(true);
  setError('')

  const {email , password} = formData;

  try{
    const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if(error){
    throw new Error(error.message);
  }

  if(data?.session){
    localStorage.setItem('Sb-session',JSON.stringify(data.session));
  }

  }catch(err){
    setError(err.message);
  }finally{
    setLoading(false);
  }

  setToken(localStorage.getItem('Sb-session'));

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
        onSubmit={handleSubmit}
      >
        {/* email feild */}
        <div className="flex flex-col gap-2">
            <label htmlFor={`email/${content}`} className="capitalize font-medium">email</label>
            <input 
              type='email' 
              id={`email/${content}`} 
              className="py-1 border-[1px] border-solid border-orangee w-full rounded-[5px] px-2"
              value={formData.email}
              name="email"
              onChange={handleChange}
              required
            />
        </div>

        {/* password field */}
        <div className="flex flex-col gap-2 my-3">
            <label htmlFor={`pass/${content}`} className="capitalize font-medium">Password</label>
            <input 
              type='password' 
              id={`pass/${content}`} 
              className="py-1 border-[1px] border-solid border-orangee w-full rounded-[5px] px-2"
              value={formData.password}
              name="password"
              onChange={handleChange}
              required
            />
        </div>
        
        {/* logIn BTN */}
        <button 
          type="submit"
          className="w-full py-2 rounded-[5px] bg-orangee text-Whitee uppercase font-medium" 
          disabled={loading}
        >
          {loading ? 'loading....' : 'log in'}
        </button>

        {
          error && <p className="w-full p-3 mt-3 text-center font-semibold capitalize text-[15px] text-[red] rounded-sm border-[1px] border-solid border-[red]">{error}</p>
        }
      </form>
    </div>
  )
}
