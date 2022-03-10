import Link from "next/link";

export default function HeaderComp() {
    return (
        <div className="sm:flex hidden flex-row w-full bg-black h-[80px]">

            <div className="w-full flex flex-row justify-between items-center p-8 ml-10">
                <div className="flex flex-row">
                    <div className="text-gray-200 font-[600] hover:bg-sky-900 rounded-xl p-2">
                        <Link href="/">
                            <span className="py-4 px-2 cursor-pointer h-full">Home</span>
                        </Link>
                    </div>
                    <div className="text-gray-200 font-[600] hover:bg-sky-900 rounded-xl p-2">
                        <Link href="/add">
                            <span className="py-4 px-2 cursor-pointer h-full">Add</span>
                        </Link>
                    </div>
                    {/* <div className="text-gray-200 font-[600] hover:bg-sky-900 rounded-xl p-2">
                        <Link href="/about">
                            <span className="py-4 px-2 cursor-pointer h-full">About</span>
                        </Link>
                    </div> */}
                </div>
                <div>
                    <div className="flex flex-row gap-2">
                    <div className="text-white font-[600] hover:bg-sky-800 rounded-xl p-2 ">
                        <Link href="/register">
                            <span className="py-4 px-2 cursor-pointer h-full">Register</span>
                        </Link>
                    </div>
                <div className="text-gray-200 font-[400] hover:text-sky-500 rounded-xl p-2 ">
                        <Link href="/login">
                            <span className="py-4 px-2 cursor-pointer h-full">Login</span>
                        </Link>
                    </div>
                    </div>
     
                </div>
            </div>
        </div>
    )
}