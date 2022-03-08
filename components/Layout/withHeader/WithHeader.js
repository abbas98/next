import HeaderComp from '../../HeaderC/HeaderComp'
import Modal from '../../modal/Modal'

export default function Withheader({ children }) {
    return (
        <>
        <div className="flex flex-col w-full items-center bg-gray-200">
        <div id='portal' className="w-full"/>
        <div>
        <HeaderComp />
            <div className="grow flex flex-col justify-center items-center w-full grow">
            {children}
            </div>
        </div>
    
        </div>
        </>
    )
}





