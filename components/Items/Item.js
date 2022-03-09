import { useState } from "react";
import Post from "../post/Post";


export default function Item({ item }) {
    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(!show)
    }
    return (
        <div style={{boxShadow: "4px 6px 8px #c4c4c4"}} className="bg-white rounded-2xl h-[310px] cursor-pointer" onClick={() => showHandler()} >
            <img className="rounded-t-2xl h-[225px] w-full" src={item.imagePath} alt={item.name} />
            <div className="p-4">
                <span className="bg-gray-100 p-1 px-2 rounded-xl">{item.name}</span>
                <p>{item.desc}</p>
            </div>
            {show && <Post item={item} showHandler={showHandler} show={show} /> }
        </div>
        
    )
}