
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

//*****************************************************************/
  //Pages
  import Home from './page/home/Home'
  import About from './page/about/About'
//*****************************************************************/

function App() {

  return (
    
    <>
      <div className='content'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
