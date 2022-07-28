import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route,  } from 'react-router-dom';
import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdNotifications} from "react-icons/md"
import AddPosts from './addPost';
import hands from "./hands.png"

import HomePg from "./home.js"
import Profile from "./Profile.js"



function App() {
  return (
  
  <BrowserRouter>
    <nav className= "navbar background">
      <div >
                <div className="logo">
                    <img src={hands}/>
                </div>
                <div className="rightNav">
                    <input type="text" name="search" id="search" />
                    <button className="btn btn-sm">Search</button>
                </div>
      </div>
    <div className= "navi" >
    <Link to = "/"><div><FaRegUserCircle size={35} /></div></Link>
    <Link to = "/"><div><FiSettings size ={35}/></div></Link>
  
    <Link to = "/addPost"><div><BsFillChatDotsFill size ={35}/></div></Link>
  
    <Link to = "/"><div ><MdNotifications size ={35} /></div></Link>
    </div>
    </nav>
    <Routes>
      <Route path="/" element={<HomePg />}></Route>
      <Route path="addPost/" element = {<AddPosts/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;



