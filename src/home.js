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
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import AddPosts from  "./addPost.js";


function HomePg(props) {

    const [posts, setPosts] = useState([])
    const [description, setDescription] = useState("")
    const [fullDescription, setFullDescription] = useState("")
    const [picture, setPicture] = useState("")
    const [title, setTitle] = useState("")



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


      const writePost = (postId, descripton , fullDescription, picture, title) => {
        const db = getDatabase(app);
        set(ref(db, 'posts/' + postId), {
          description: description,
          fullDescription: fullDescription,
          picture:picture,
          title:title
        });
      }
      useEffect(() => {
        readPosts()
      }, [])

    return (
        <div>
            <div className = "wrapper">
              
            {posts.map(
                post => (
                        <section className="section">
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