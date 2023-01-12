import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MobileMenu from '../Components/MobileMenu'
import Navbar from '../Components/Navbar'
import React,{useState,useEffect} from "react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);


  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } 
  else{

  return(<>
  
  <Header/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  {/* <button id="to-top-button" onClick={goToTop} title="Go To Top"
        class="hidden  fixed z-90 bottom-20 lg:bottom-8 right-8  border-0 w-8 h-8 lg:w-12 lg:h-12 rounded-full drop-shadow-md bg-secondary text-white text-xl lg:text-3xl font-bold">&uarr;</button> */}
        <MobileMenu/>
  </>) 
  }
}

export default MyApp
