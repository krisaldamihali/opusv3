import logo from './logo.svg';
import './App.css';
import "./Profile.css"

import { BrowserRouter, Link, Routes, Route,  } from 'react-router-dom';
import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdNotifications} from "react-icons/md"
import {MdFeed} from "react-icons/md"
import{BsFillPlusCircleFill} from "react-icons/bs"
import {AiFillHome} from "react-icons/ai"
import AddPosts from './addPost';
import hands from "./hands.png"

import HomePg from "./home.js"
import Profile from "./Profile.js"
import  LogIn from "./signIn.js"

import "./styles.css"





function App() {
  return (
  
  <BrowserRouter>
    <nav className= "navbar background">
      <div>

            <div className="logo">
                <img src={hands}/>
            </div>


            <div className="rightNav">
              <input type="text" name="search" id="search" />
              <button className="btn btn-sm">Search</button>
            </div>
        </div>

    <div className= "navi" >      
      <Link to = "/"><div ><AiFillHome size ={35} /></div></Link>
      <Link to = "/Profile"><div><FaRegUserCircle size={35} /></div></Link>
      <Link to = "/home"><div><MdFeed size={35} /></div></Link>
      <Link to = "/addPost"><div><BsFillPlusCircleFill size ={35}/></div></Link>
  


    </div>
    </nav>
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path = "home/" element ={<HomePg/>}/>
      <Route path="addPost/" element = {<AddPosts/>}/>
      <Route path="Profile/" element = {<Profile/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;



