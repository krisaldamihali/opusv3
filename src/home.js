import { logDOM } from '@testing-library/react';
import React from 'react';
import './App.css';
import hands from "./hands.png"
import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdNotifications} from "react-icons/md"
import Post from "./post.js"

function HomePg(props) {
    return (
        <div>

            <nav class="navbar background">

                          <div class="logo">
                        <img src={hands}/>
                            </div>
  
                <div className="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>



                <div className='icons'>
                <ul class="nav-list">
          
                    <li><div  onClick={()=>{alert('profile')}}><FaRegUserCircle size={35} /></div></li>
                    <li><div onClick={()=>{alert('clicked')}}><FiSettings size ={35} /></div></li>
                    <li><div onClick={()=>{alert('clicked')}}><BsFillChatDotsFill size ={35}/></div></li>
                    <li><div onClick={()=>{alert('clicked')}}><MdNotifications size ={35} /></div></li>
                </ul>
                </div>
            </nav>
                <div className = "wrapper">
                <section class="section">
                <Post pic= {hands}  anouncement = "Develop with us" description = " hello everyone! we are a new start-up trying to find full stack devs hello everyone! we are a new start-up trying to find full stack devshello everyone! we are a new start-up trying to find full stack devs"
                input = "join"/>
            </section>
            <section class="section">
            <Post pic= {hands}  anouncement = "Develop with us" description = " hello everyone! we are a new start-up trying to find full stack devs hello everyone! we are a new start-up trying to find full stack devshello everyone! we are a new start-up trying to find full stack devs"
            input = "apply" fullDescription = 'Font Awesome icons are like regular fonts but you get graphics instead of letters. They are scalable vector graphics (SVGs) which means that you can change their colors, resize them, and so on without compromising the quality.

            But without react-icons to use Fess of installing the different packages using several command lines.
            ' />
            </section>
            <section class="section">
            <Post/>
            </section>
            <section class="section">
            <Post/>
            </section>
            <section class="section">
            <Post/>
            </section>
            <section class="section">
            <Post/>
            </section>
                </div>
 

            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default HomePg