import { logDOM } from '@testing-library/react';
import React from 'react';
import './App.css';
import hands from "./hands.png"
import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdNotifications} from "react-icons/md"
import Post from "./post.js"
import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from './firebase_config.js';

function HomePg(props) {
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState("")
    const [imgsrc, setImgSrc] = useState("")

    const readPosts = () => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'posts/');
        console.log(dbRef)
        onValue(dbRef, (snapshot) => {
          const dbTable = snapshot.val();
          console.log(dbTable)
          const newPosts = []
          dbTable.forEach((dbItem) => {
            newPosts.push(dbItem)
          })
          setPosts(newPosts)
          console.log(posts)
        })
      }

      useEffect(() => {
        readPosts()
      }, [])

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
                        <li><div onClick={()=>{alert('profile')}}><FaRegUserCircle size={35} /></div></li>
                        <li><div onClick={()=>{alert('clicked')}}><FiSettings size ={35} /></div></li>
                        <li><div onClick={()=>{alert('clicked')}}><BsFillChatDotsFill size ={35}/></div></li>
                        <li><div onClick={()=>{alert('clicked')}}><MdNotifications size ={35} /></div></li>
                    </ul>
                </div>
            </nav>
            <div className = "wrapper">

            {posts.map(
                post => (
                        <section class="section">
                            <Post pic= {post.picture}  anouncement ={post.title} description ={post.description} input = "apply" fullDescription={post.fullDescription}/>
                        </section>

                )
                
        
            )}
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