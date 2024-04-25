import React from 'react';
import { BrowserRouter,Route, Router,Routes,S } from 'react-router-dom';
import Home from '../pages/home/home.js';
import Cupom from '../pages/cupom/cupom.js';

const Body = ()=>{



    return (
        <div>
            <div>
                <BrowserRouter >
                    <Routes>
                        <Route path='/'  element={<Home/>}/>
                        <Route path='/cupom'  element={<Cupom/>}/>
                    </Routes>                                       
                </BrowserRouter >
            </div>
        </div>
    );
};


export default Body;