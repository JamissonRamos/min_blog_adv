//Css
import './App.css'

//Material UI
// import { CircularProgress, Backdrop } from '@mui/material';

  //Reat router
  import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

  //FireBase
  import { onAuthStateChanged } from 'firebase/auth'

  //Hooks
  import { useEffect, useState } from 'react'
  import { useAuthentication } from './hooks/useAuthentication';


  //Context
  import { AuthProvider } from './context/AuthContext';

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
  import Dashboard from './page/dashboard/Dashboard'
  import CreatePost from './page/create-post/CreatePost'
  import BlogPage from './page/blog-page/BlogPage';
  import Search from './page/search/Search';
  import Post from './page/post/Post';
//*****************************************************************/

function App() {
  const [user, setUser] = useState(undefined); //Vai receber o valor do usuário;

  const {auth} = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {

      onAuthStateChanged(auth, (user) => {

        setUser(user)

      })

  },[auth])

  if(loadingUser){

    return (
        <p>Caregando...</p>
    )
  }

  console.log(user)

  return (
    
    <>
      <AuthProvider value={user}>
        <BrowserRouter>

          <section className='section-header'>
            <Header/>
          </section>

          <section className="section-pages-footer">

            
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/about' element={<About/>} ></Route>
              <Route path='/blog_page' element={<BlogPage/>} ></Route>
              <Route path='/search' element={<Search/>} ></Route>
              <Route path='/post/:id' element={<Post/>} ></Route>
              <Route path='/login' element={ !user ? <Login/> : <Navigate to="/" /> } ></Route>
              <Route path='/register' element={ !user ? <Register/> : <Navigate to="/" />  } ></Route>
              <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to="/login" /> } ></Route>
              <Route path='/post/createPost' element={user ? <CreatePost/> : <Navigate to="/login" /> } ></Route>
            </Routes>

            <section  className='section-footer'>
              <Footer/>
            </section>
            
          </section>

        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
