import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register'
function App() {
  const router = createBrowserRouter([
    {
      path: '/register',
      element: <Register> Root Route</Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/',
      element: <Home> Root Route</Home>
    },
  ])
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </main>
  )
}

export default App;
