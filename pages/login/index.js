import AddLayout from "../../components/Layout/AddLayout/AddLayout"
import Login from "../../components/login/Login"

export default function LoginPage() {
    return(
        <Login/>
    )
}




LoginPage.getLayout = function getLayout(LoginPage){
    return (
        <AddLayout>
            {LoginPage}
        </AddLayout>
    )
}