import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
