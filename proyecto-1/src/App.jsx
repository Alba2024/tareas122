import './App.css'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Home from './Pags/Home.jsx'
import Navegador from './components/Navegador'
import Cars from './Pags/Cars.jsx'
import Barby from './Pags/Barby.jsx'
import Uno from './Pags/Uno.jsx'
function App() {
  return(
    <div >
      <BrowserRouter>
         <Navegador></Navegador>
        <Routes>
          <Route index path="/" element={<Home></Home>}/>
          <Route  path="/Cars.jsx" element={<Cars></Cars>}/>
          <Route  path="/Barby.jsx" element={<Barby></Barby>}/>
          <Route  path="/Uno.jsx" element={<Uno></Uno>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
