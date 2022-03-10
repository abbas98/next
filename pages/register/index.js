
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
    const response = await data.json()
    return response
}
export default function RegisterPage() {

    const router = useRouter()

    const registerHandler = (e) => {
        getData(e).then(e => {
            router.push('/')
            toast.success('You signed up !')
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