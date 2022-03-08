import '../styles/globals.css'
import toast, { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';


export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
     <Toaster
  position="top-right"
  reverseOrder={false}
/>
<NextNProgress height={1} color="#fff" options={{ showSpinner: false, easing: 'ease', speed: 500 }}/>

  <Component {...pageProps} />
    </>
)
}
