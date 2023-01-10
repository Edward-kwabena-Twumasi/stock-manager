import './App.css';
import { useEffect, useRef,useState } from 'react';
import NavBar from './components/navbar';
import AuthScreen from './components/auth/auth';
import Login from './components/auth/login';
import Register from './components/auth/register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';


import Home from './components/home/home';
import About from './components/home/about';
import Products from './components/home/products';
import Categories from './components/home/categories';
import Invoices from './components/home/invoices';
import Dashboard from './components/home/dashboard';
import Introduction from './components/introduction';








function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  


  return (
  
    
        <div className='w-screen h-screen '>
          <Router> 
            <div className='rounded-lg h-full overflow-scroll  w-full content hide-scroll '>
            
                  <NavBar /> 
                  <div className='content-body h-full mt-[70px]   rounded-lg shadow-xl '>
                    <Routes>
                      <Route exact path="/" element={<Introduction></Introduction>}>
                       
                      </Route> 
                      <Route exact path="/api/auth"  element={<AuthScreen ref={aboutRef} />}>
                        <Route exact path="login"  element={<Login  />}></Route> 
                        <Route exact path="register"  element={<Register  />}></Route> 
                        <Route index element={<Login />} />
                      </Route>
                      <Route exact path="/api/home"  element={<Home />}>
                        <Route exact path="dashboard" element={<Dashboard ref={skillsRef}/>}>                           
                        </Route>          
                        <Route exact path="categories" element={<Categories />}>                           
                        </Route>
                        <Route exact path="products" element={<Products/>}>                          
                        </Route>
                        <Route exact path="invoices" element={<Invoices/>}>                          
                        </Route>
                        <Route exact path="about" element={<About/>}>  
                        </Route>
                        <Route index element={<Dashboard/>}>         
                        </Route>
                      </Route> 
                  </Routes>
                  </div>
            </div>
          </Router>
           
         </div>   
  
    
  );
}

export default App;
