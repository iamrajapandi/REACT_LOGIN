import { User } from 'lucide-react';
// import App from '../src/assets/App.css';
const  App=()=>{
return(
  <>
  <div className="h-screen w-screen flex justify-center items-center  bg-slate-100">
    <div className="h-3/5 w-3/5 flex bg-violet-300 rounded-md shadow-lg">
    <form action="" className="w-[200%] h-[80%]   flex flex-col justify-center items-center gap-2">
    <div className='absolute top-20 left-20 w-20 h-20 flex justify-start items-start rounded-full bg-white'></div>
    <User className=' h-1/6 w-1/6 '/>
      <h2 className="font-bold  text-white text-3xl ">Login</h2>
      <input type="text" placeholder="name" className='flex rounded-md outline-none focus:border-b-2 hover:border-purple-500'/>
      <input type="mail" placeholder="email" className='flex rounded-md outline-none focus:border-b-2 hover:border-purple-500'/>
      <input type="number" placeholder="cell" className= 'flex rounded-md outline-none  focus:border-b-2 hover:border-purple-500' />
      <button
        type="submit"
        className=" bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 ">
        Submit
      </button>
      </form>
    </div>
  </div>
  </>
)
}

export default App
