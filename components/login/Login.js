import { useRef } from "react"

export default function Login() {


    const submitHandler = () => {

    }

    const userNameRef = useRef()
    const passwordRef = useRef()
    
    return(
        <form style={{boxShadow: "0 0 10px #c4c4c4"}} onSubmit={e => e.preventDefault()} className="flex flex-col bg-white w-full h-full sm:w-1/4 sm:rounded-2xl sm:h-[65%] justify-center gap-12 p-2 items-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="flex flex-col gap-4 w-2/3">
            <input ref={userNameRef} placeholder="Username" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <input ref={passwordRef} placeholder="Password" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <button onClick={submitHandler} className="w-full text-white text-center flex items-center justify-center h-[50px] rounded-2xl p-4 outline-none bg-sky-800 text-md font-[600] hover:bg-sky-700">Submit</button>
            </div>
            
            
        </form>
    )
}