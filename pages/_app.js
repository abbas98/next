import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import AddLayout from '../components/Layout/AddLayout/AddLayout';
import Router from 'next/router';
import Register, { redirectUser } from '../components/register/Register';

import Redirect from '../components/redirect/Redirect';

export default function MyApp({ Component, pageProps, Redirect }) {
  const [user, setUser] = useState(null);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  if (pageProps.protected) {
    // Redirect = {
    //   destination: '/register',
    //   permanent: false,
    // }
    return getLayout(
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <NextNProgress height={2} color="#fff" options={{ showSpinner: false, easing: 'ease', speed: 500 }} />

        <Component {...pageProps} />
      </>
    )

    // return getLayout(
    //   <Register />

    // )
  } else {
    return getLayout(
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <NextNProgress height={2} color="#fff" options={{ showSpinner: false, easing: 'ease', speed: 500 }} />

        <Component {...pageProps} />
      </>
    )
  }

  // if (
  //   pageProps.protected &&
  //   user &&
  //   pageProps.userTypes &&
  //   pageProps.userTypes.indexOf(user.type) === -1
  // ) {
  //   return <Layout>Sorry, you don't have access</Layout>;
  // }


}



