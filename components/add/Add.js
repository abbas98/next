import { useRef } from "react"


export default function Add({dataHandler}) {
    const cityRef = useRef(),
    imagePathRef = useRef(),
    descRef = useRef();

    const buttonHandler = () => {
        dataHandler({name:cityRef.current.value, imagePath: imagePathRef.current.value, desc: descRef.current.value})
    }

    return (
        <div style={{boxShadow: "0 0 10px #c4c4c4"}} className="bg-white w-full h-full sm:w-1/3 sm:h-3/4 flex flex-col items-center justify-center gap-10 p-8 sm:rounded-2xl">
            <h2 className="text-2xl font-[700] text-gray-600">
                New City
            </h2>
            <div className="flex flex-col gap-6 items-end">
                <div className="flex flex-row gap-2 items-center">
                    {/* <label htmlFor="name">City name: </label> */}
                    <input ref={cityRef} id="name" placeholder="Enter name of City" className="h-[50px] outline-none rounded-2xl p-4 border-2 border-gray-100 w-[300px]" type="text" />
                </div>

                <div className="flex flex-row gap-2 items-center">
                    {/* <label >Image path: </label> */}
                    <input ref={imagePathRef} placeholder="Enter image path" className="h-[50px] outline-none rounded-2xl p-4 border-2 border-gray-100 w-[300px]" type="text" />
                </div>
                <div className="flex flex-row gap-2 items-center">
                    {/* <label>Description: </label> */}
                    <textarea ref={descRef} rows="10" placeholder="Enter description" className="h-[100px] outline-none rounded-2xl p-4  border-2 border-gray-100 w-[300px]" type="text" />

                </div>
        
            </div>
            <div className="flex w-full justify-center items-centers">
                <button onClick={() => buttonHandler()} className="font-[600] rounded-2xl bg-cyan-800 text-white h-[50px] w-[300px] hover:bg-cyan-700 w-[300px]">Submit</button>

                </div>
        </div>
    )

}