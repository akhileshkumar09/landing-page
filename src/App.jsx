

// import { Button } from './components/ui/button'
import Navbar from './components/ui/Navbar'
import FirstPage from './pages/FirstPage'
import Footer from './pages/Footer'
import ForthPage from './pages/ForthPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

function App() {


  return (
    <>
     <Navbar/>
     <div className='p-4'>
      <FirstPage/>
     </div>
     <div>
      <SecondPage/>
     </div>
     <div>
      <ThirdPage/>
     </div>
     <div className=' relative -bottom-3'>
      <ForthPage/>
     </div>
   <div className=''>
    <Footer/>
   </div>
    </>
  )
}

export default App
