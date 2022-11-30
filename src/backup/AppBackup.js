import {React, useState} from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SharedContext from './SharedContext/SharedContext' 

import './App.css';
import './Theme/AppTheme.css'

import Map from './Components/Map/Map';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import Address from './Components/Address/Address';
import Category from './Components/Category/Category';
import ProductList from './Components/ProductList/ProductList';
import Footer from './Components/Footer/Main/Footer';
import Product from './Components/Product/Product';
import Search from './Components/Search/Search'
import Cart from './Components/Cart/Cart';
import Account from './Components/Account/Account';
import About from './Components/About/About';
import Feedback from './Components/Feedback/Feedback';
import Orders from './Components/Orders/Orders';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import Register from './Components/Register/Register';
import AppLogic from './AppLogic';

function App() {

  const initialAppState = {
    cart:{  itemCount:0 , itemList: []}
  };

  const loc = useLocation();
  const [appState, setAppState]  = useState(initialAppState);
  const {setUserState,userState} = AppLogic();

  // console.log(userState);

  return (

    <div className=" a-wrapper">
      <SharedContext.Provider value={{appState,setAppState}}>

        
        
        {

          
          (userState.data.status == 'loggedIn')?

            <>
              <div className=" main-sub">
                <Routes location={loc} key={loc.key} >
                  <Route path='/' element={<Category />} />
                  <Route path='/ProductList' element={<ProductList />} />
                  <Route path='/Product' element={<Product />} />
                  <Route path='/Search' element={<Search />} />
                  <Route path='/Cart' element={<Cart />} />
                  <Route path='/Account' element={<Account />} />
                  <Route path='/About' element={<About />} />
                  <Route path='/Feedback' element={<Feedback />} />
                  <Route path='/Orders' element={<Orders />} />
                  <Route path='/OrderDetails' element={<OrderDetails />} />
                  <Route path='/Address' element={<Address />} />
                  <Route path='/Payment' element={<Payment />} />
                  <Route path='/Map' element={<Map />} />
                </Routes>
              </div>

              <div className=" main-sub">
                <Footer />
              </div> 

            </>

          :(true)?
            <Register />

          :(userState.data.status == 'loggedOut')?

            <Login />

          :
          <div>login</div>
        
        }

        {/* userState.data.status == 'toRegister' */}
      </SharedContext.Provider>
    </div>

  );

  
}

export default App;
