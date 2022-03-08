import Add from "../../components/add/Add"
import  AddLayout  from "../../components/Layout/AddLayout/AddLayout";
import toast from "react-hot-toast";
import { useRouter } from "next/router";



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

export default function add() {
    

    const dataHandler = (event) => {
        
        insertData(event).then(e => {
            console.log('pages', e)
            
            toast.success('imported')
        })

    }


    return (
        <>
            
                <Add dataHandler={dataHandler} />
            

        </>

    )
}


add.getLayout = function getLayout(add) {
    return (
        <AddLayout>
            {add}
        </AddLayout>
    )
}

