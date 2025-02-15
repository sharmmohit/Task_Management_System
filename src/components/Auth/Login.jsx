import React,{useState} from 'react';

const Login = ({handleLogin}) => {
 

const[email,setEmail]=useState('')
const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
       
        setEmail('');
        setPassword('');

    }
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border border-emerald-400 rounded-2xl p-10 w-80'>
        <form 
         onSubmit={(e)=>{
            submitHandler(e);

         }} 
         className='flex flex-col items-center justify-center gap-y-4 w-full'>
          <input value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
           required

            className='w-full text-white outline-none bg-transparent border border-emerald-400 text-lg py-3 px-4 rounded-full placeholder:text-gray-400 text-center'
            type='email'
            placeholder='Enter your email'
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);

          }}
          required

            className='w-full text-white outline-none bg-transparent border border-emerald-400 text-lg py-3 px-4 rounded-full placeholder:text-gray-400 text-center'
            type='password'
            placeholder='Enter password'
          />
          <button
            className='bg-emerald-500 text-white text-lg py-2 px-8 rounded-full mt-2 hover:bg-emerald-600 transition duration-300'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
