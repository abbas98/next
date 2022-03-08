import HeaderComp from "../../HeaderC/HeaderComp"
import Modal from "../../modal/Modal"

export default function AddLayout({ children }) {
    return (
        <>
        <div className="flex flex-col w-full items-center bg-gray-200 h-screen">
        <HeaderComp />
            <div className="grow flex flex-col justify-center items-center w-full grow ">
            {children}
            </div>
        </div>
        </>
    )
}