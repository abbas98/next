import { useRef } from "react"
import toast from "react-hot-toast"

export default function Register({registerHandler}) {

    const userNameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const submitHandler = () => {
        if (confirmPasswordRef.current.value === passwordRef.current.value){
            registerHandler({username: userNameRef.current.value, password: passwordRef.current.value})
        }else{
            toast.error('Password and Confirm Paswword should be same')
        }
        
    }
     
    return(
        <form style={{boxShadow: "0 0 10px #c4c4c4"}} onSubmit={e => e.preventDefault()} className="flex flex-col bg-white w-full h-full sm:w-1/4 sm:rounded-2xl sm:h-[65%] justify-center gap-14 p-2 items-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <div className="flex flex-col gap-4 w-2/3">
            <input ref={userNameRef} placeholder="Username" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <input ref={passwordRef} placeholder="Password" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <input ref={confirmPasswordRef} placeholder="Confirm Password" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <button onClick={submitHandler} className="w-full text-white text-center flex items-center justify-center h-[50px] rounded-2xl p-4 outline-none bg-sky-800 text-md font-[600] hover:bg-sky-700">Submit</button>
            </div>
            
            
        </form>
    )
}

