
import Register from "../../components/register/Register"
import AddLayout from "../../components/Layout/AddLayout/AddLayout"
export default function RegisterPage(){
    return(
        <Register />
    )
}
RegisterPage.getLayout = function getLayout(RegisterPage) {
    return (
        <AddLayout>
            {RegisterPage}
        </AddLayout>
    )
}