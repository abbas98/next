import { createPortal } from "react-dom"
import AddLayout from "../Layout/AddLayout/AddLayout"
import styles from './classes.module.css'

export default function Modal({ children, showHandler }) {
    return (
        <>
            {createPortal(
                <div className={"h-full w-full absolute " + styles.modalContainer} onClick={() => showHandler(false)} >
                    <div className={"flex justify-center items-center h-screen " + styles.contextContainer} >
                        {children}
                    </div>
                </div>, process.browser && document.querySelector('#portal') )}
        </>
    )
}