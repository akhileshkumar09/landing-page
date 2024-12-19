

// import { Button } from './components/ui/button'
import Navbar from './components/ui/Navbar'
import FirstPage from './pages/FirstPage'
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
   
    </>
  )
}

export default App
