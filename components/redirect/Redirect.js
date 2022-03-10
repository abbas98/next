import { useRouter } from "next/router"

export default function Redirect({route}) {
    const router = useRouter()
    router.push(route)
    return (<>
    <div>fd</div>
    </>)
}