
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
import Login from './page/login/Login'
import Register from './page/register/Register'
//*****************************************************************/

function App() {

  return (
    
    <>

      <BrowserRouter>

        <section className='section-header'>
          <Header/>
        </section>

        <section className="section-pages-footer">

          
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
          </Routes>

          <section  className='section-footer'>
            <Footer/>
          </section>
          
        </section>

      </BrowserRouter>

    </>
  )
}

export default App
