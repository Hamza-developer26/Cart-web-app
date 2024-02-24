import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'
import Navbar from './component/Navbar'


function App() {
  return (
    < >
    <Navbar />
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </>
  )
}

export default App
