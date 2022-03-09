import Head from 'next/head'
import Image from 'next/image'
import Items from '../components/Items/Items'
import Withheader from '../components/Layout/withHeader/WithHeader'
import styles from '../styles/Home.module.css'
import { MongoClient } from "mongodb"
import WithLoading from '../components/withLoading/WithLoading'
import { useState, useEffect } from 'react'



export default function Home({items}) {

  const WithLoadingComponent = WithLoading(Items)

  const [isLoading, setIsLoading] = useState(false)
  const [repos, setrepos] = useState(null)
  // useEffect(() => {
  //   setIsLoading(true)
  //   getData().then(res => {
  //     setIsLoading(false)
  //     setrepos(res)
  //   })
  
  // }, [isLoading])

  return (
    <div className="flex bg-gray-200">
      <Withheader>

      {/* <ListWithLoading
        isLoading={isLoading}
        repos={repos}
      /> */}

        <Items itemsList={items}/>
        
    </Withheader>
    </div>
    
      
  )
}


  export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://amirabbas:gEliUZvlfxDQSJn0@cluster0.h1rgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db()
    const collection = db.collection('cities')

    const result = await collection.find().toArray()

    client.close()

    return {
      props:{
        items:result.map(item => ({
          name:item.name,
          imagePath: item.imagePath,
          desc: item.desc,
          id: item._id.toString()
        }))
      }
        
      
        
      }
    
  }