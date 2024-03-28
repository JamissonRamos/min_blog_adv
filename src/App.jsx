
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


//*****************************************************************/
  //Components
  import Header from './components/nav-bar/header/Header'
//*****************************************************************/

//*****************************************************************/
  //Pages
  import Home from './page/home/Home'
  import About from './page/about/About'
import Footer from './components/footer/Footer'
//*****************************************************************/

function App() {

  return (
    
    <>
      <div className='content'>

      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>

        <Footer/>
        
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
