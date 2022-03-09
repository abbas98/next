export default function Register() {
    return(
        <form onSubmit={e => e.preventDefault()} className="flex flex-col bg-white w-full h-full justify-center gap-10 p-10 items-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="flex flex-col gap-3">
            <input placeholder="Username" className="w-full h-[60px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <input placeholder="Password" className="w-full h-[60px] rounded-2xl p-4 outline-none bg-gray-100" type="text" />
            <button className="w-full text-white h-[60px] rounded-2xl p-4 outline-none bg-sky-800 text-xl font-[700]">Submit</button>
            </div>
            
            
        </form>
    )
}