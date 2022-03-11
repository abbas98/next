import { useRef } from "react"
import toast from "react-hot-toast"
import { useState, useEffect } from "react"

export default function Register({ registerHandler }) {


    const [userIdentify, setuserIdentify] = useState('')
    const [userIdentifyStatus, setuserIdentifyStatus] = useState()
    const [password, setpassword] = useState('')
    const [passwordStatus, setpasswordStatus] = useState('')
    const [confirmPassword, setconfirmPassword] = useState()
    

    /// checks whether idetify field is phone number or email
    let phoneNumberRegex = new RegExp('^(\\+98|0)?9\\d{9}$')
    let result = phoneNumberRegex.test(userIdentify)

    const emailRegex = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'),
    emailRegexResult = emailRegex.test(userIdentify)

    const numberReg = new RegExp(/^\d+$/);
    const numberRegResult= /^\d+$/.test(userIdentify)
    
    ///// handle client side errors

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (userIdentify && userIdentify.length < 6) {
                setuserIdentifyStatus('input should be more than 5 char')

            }
            if (!emailRegexResult && !result && numberRegResult){
                setuserIdentifyStatus('Phone number format is incorrect')
                
            }
        }, 600);

        return () => {
            clearTimeout(timeout)
            setuserIdentifyStatus('')
        }
    }, [userIdentify])



    useEffect(() => {

        const timeout = setTimeout(() => {
            if (password && password.length < 8) {
                setpasswordStatus('Password should be more than 5 char')

            }
        }, 600);

        return () => {
            clearTimeout(timeout)
            setpasswordStatus('')
        }
    }, [password])

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (confirmPassword && (password !== confirmPassword)){
                setpasswordStatus('Check confirm password')
            }
 
        }, 600);

        return () => {
            clearTimeout(timeout)
            setpasswordStatus('')
        }
    }, [password, confirmPassword])



    const submitHandler = () => {
        if(result && (userIdentify.slice(0,3) === '+98')){
            registerHandler({phone_number: userIdentify.slice(0,14), password: password})
            return
        }

        if(result && (userIdentify.slice(0,2) === '09')){
            registerHandler({phone_number: '+98' + userIdentify.slice(2,11), password: password})
            return
        }

        
            registerHandler({email: userIdentify, password:password})

        
    }

    return (
        <form style={{ boxShadow: "0 0 10px #c4c4c4" }} onSubmit={e => e.preventDefault()} className="flex flex-col bg-white w-full h-full sm:w-1/4 sm:rounded-2xl sm:h-[65%] justify-center gap-14 p-2 items-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <div className="flex flex-col gap-4 w-2/3">
                <div>
                    <input onChange={(e) => setuserIdentify(e.currentTarget.value)} placeholder="Email or phone number" className="w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
                    <span className="text-rose-500 text-xs" >{userIdentifyStatus}</span>
                </div>
                <div className="flex flex-col gap-4">
                <input onChange={(e) => setpassword(e.currentTarget.value)} placeholder="Password" className={"w-full h-[50px] rounded-2xl p-4 outline-none bg-gray-100"} type="text" />
                <input onChange={(e) => setconfirmPassword(e.currentTarget.value)} disabled={password.length < 8} placeholder="Confirm Password" className="w-full disabled:bg-gray-200 h-[50px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
                <span className="text-rose-500 text-xs" >{passwordStatus}</span>
                </div>
                
                <button disabled={!userIdentify || !confirmPassword || (password !== confirmPassword)} onClick={submitHandler} className="w-full text-white disabled:bg-gray-500 text-center flex items-center justify-center h-[50px] rounded-2xl p-4 outline-none bg-sky-800 text-md font-[600] hover:bg-sky-700">Submit</button>
            </div>


        </form>
    )
}

