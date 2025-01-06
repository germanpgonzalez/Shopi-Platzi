import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home }  from '../Home'
import { MyAccount }  from '../MyAccount'
import { MyOrders }  from '../MyOrders'
import { MyOrder }  from '../MyOrder'
import { NotFound }  from '../NotFound'
import { SingIn }  from '../SingIn'

import { Navbar } from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/sing-in', element: <SingIn/> },
    { path: '/*', element: <NotFound/> },
  ])

  return routes;

}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
