import Header from '../components/Header'
import Banner from '../components/Banner'
import Product from '../components/Product'
import Contact from '../components/Contact'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Product/>
      <Contact />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Footer/>
    </>
  )
}
