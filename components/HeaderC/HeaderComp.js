import Link from "next/link";

export default function HeaderComp() {
    return (
        <div className="flex flex-row w-full bg-sky-900 h-[80px]">

<div className="w-1/4 flex flex-row justify-between items-center p-8 ml-10">
                <div className="text-gray-200 font-[600] hover:bg-sky-800 rounded-xl p-2">
                    <Link href="/">
                        <span className="py-4 px-2 cursor-pointer h-full">Home</span>
                    </Link>
                </div>
                <div className="text-gray-200 font-[600] hover:bg-sky-800 rounded-xl p-2">
                    <Link href="/add">
                        <span className="py-4 px-2 cursor-pointer h-full">Add</span>
                    </Link>
                </div>
                <div className="text-gray-200 font-[600] hover:bg-sky-800 rounded-xl p-2">
                    <Link href="/about">
                        <span className="py-4 px-2 cursor-pointer h-full">About</span>
                    </Link>
                </div>
            </div>


        </div>
    )
}