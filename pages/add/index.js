import Add from "../../components/add/Add"
import  AddLayout  from "../../components/Layout/AddLayout/AddLayout";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useUser } from '../../components/context/Context'


async function insertData(input) {
    // console.log('input', input)
    const data = await fetch('/api/ser', {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const response = await data.json()
    return response
}

export default function AddPage() {
    const router = useRouter()

    const dataHandler = (event) => {
        
        insertData(event).then(e => {
            console.log('pages', e)
            router.push('/')
            toast.success('imported')
        })

    }


    return (
        <>
            
                <Add dataHandler={dataHandler} />
            

        </>

    )
}


AddPage.getLayout = function getLayout(AddPage) {
    return (
        <AddLayout>
            {AddPage}
        </AddLayout>
    )
}

export async function getServerSideProps({ res, params }){
        // res.setHeader("location", "/register");
        // res.statusCode = 302;
        // res.end();

        return{
            redirect: {
                permanent: false,
                destination: '/somewhere-else'
              }
        }
    } 



