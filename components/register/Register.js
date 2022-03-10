import { useRef } from "react"
import toast from "react-hot-toast"

export default function Register({registerHandler}) {

    const userIdentifyRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const submitHandler = () => {

        if (!userIdentifyRef.current.value) {
            toast.error('Enter phone number or email')
            return;
        }
        /// checks whether idetify field is phone number or email
        let phoneNumberRegex = new RegExp('^(\\+98|0)?9\\d{9}$')
        let result = phoneNumberRegex.test(userIdentifyRef.current.value)

        if (!result && !userIdentifyRef.current.value.includes('@')){
            toast.error('Email format is incorrect')
            return;
        }

        if (!userIdentifyRef.current.value || !passwordRef.current.value || !confirmPasswordRef.current.value) {
            toast.error('Fill all fields')
            return;
        }
        

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            toast.error("Password and confirm password aren't same")
            return;
        }
        


        if (result){
            if (userIdentifyRef.current.value.slice(0,3) === '+98'){
                registerHandler({phone_number: userIdentifyRef.current.value, password: passwordRef.current.value})
                return;
            }
            if (userIdentifyRef.current.value.slice(0,2) === '09'){
                registerHandler({phone_number: '+98' + userIdentifyRef.current.value.slice(1, 11), password: passwordRef.current.value})
                return;
            }
        }else{
            registerHandler({email: userIdentifyRef.current.value, password: passwordRef.current.value})
        }
    }
     
    return(
        <form style={{boxShadow: "0 0 10px #c4c4c4"}} onSubmit={e => e.preventDefault()} className="flex flex-col bg-white w-full h-full sm:w-1/4 sm:rounded-2xl sm:h-[65%] justify-center gap-14 p-2 items-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <div className="flex flex-col gap-4 w-2/3">
            <input ref={userIdentifyRef} placeholder="Email or phone number" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <input ref={passwordRef} placeholder="Password" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <input ref={confirmPasswordRef} placeholder="Confirm Password" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <button onClick={submitHandler} className="w-full text-white text-center flex items-center justify-center h-[50px] rounded-2xl p-4 outline-none bg-sky-800 text-md font-[600] hover:bg-sky-700">Submit</button>
            </div>
            
            
        </form>
    )
}

