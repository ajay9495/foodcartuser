
import {React, useState} from 'react'
import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import Dialogue from '../BaseComponents/Dialogue/Dialogue'


import Register from '../Register/Register';
import Account from '../Account/Account';
import Category from '../Category/Category';
import Footer from '../Footer/Main/Footer'
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart'
import Search from '../Search/Search'
import Feedback from '../Feedback/Feedback'
import About from '../About/About'
import Map from '../Map/Map'
import Address from '../Address/Address'
import Payment from '../Payment/Payment'
import Orders from '../Orders/Orders'
import OrderDetails from '../OrderDetails/OrderDetails'

export default function MainRouter(){

    const loc = useLocation();

    return(

        <>
            <Dialogue />
            
            <div className=" main-sub">
                <Routes location={loc} key={loc.key} >
                    <Route path='/' element={<Category />} />
                    <Route path='/Account' element={<Account />} />
                    <Route path='/ProductList' element={<ProductList />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Search' element={<Search />} />
                    <Route path='/Feedback' element={<Feedback />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Address' element={<Address />} />
                    <Route path='/Map' element={<Map />} />
                    <Route path='/Payment' element={<Payment />} />
                    <Route path='/Orders' element={<Orders />} />
                    <Route path='/OrderDetails' element={<OrderDetails />} />
                    
                    
                </Routes>
            </div>

            <div className=" main-sub">
                <Footer />
            </div> 

        </>
    )

}





























