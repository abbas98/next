
import Register from "../../components/register/Register"
import AddLayout from "../../components/Layout/AddLayout/AddLayout"
import { useRouter } from "next/router"
import toast from "react-hot-toast";

async function getData(input) {
    const data = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return data
}
export default function RegisterPage() {

    const router = useRouter()

    function registerHandler(e) {
        getData(e).then(async res => {
            const data = await res.json()
            if (res.status === 201) {
                toast.success(data.message)
                router.push('/')
                return
            }
            toast.error(data.message)

        })
    }
    return (
        <Register registerHandler={registerHandler} />
    )
}
RegisterPage.getLayout = function getLayout(RegisterPage) {
    return (
        <AddLayout>
            {RegisterPage}
        </AddLayout>
    )
}