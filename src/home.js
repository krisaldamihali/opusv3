import { logDOM } from '@testing-library/react';
import React from 'react';
import './App.css';
import hands from "./hands.png"
import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {IoIosNotifications} from "react-icons/io"
import Post from "./post.js"

function HomePg() {
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
                    <li><div onClick={()=>{alert('clicked')}}><IoIosNotifications size ={35} /></div></li>
                </ul>
                </div>
            </nav>
                <div className = "wrapper">
                <section class="section">
                <Post/>
            </section>
            <section class="section">
                <div class="float-child">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            JavaScript Tutorial
                        </h1>
                        <p class="text-small">
                            JavaScript is the world most popular 
                            lightweight, interpreted compiled 
                            programming language. It is also 
                            known as scripting  language for
                            web pages. It is well-known for 
                            the development of web page many 
                            non-browser environments also use
                            it. JavaScript can be used for 
                            Client-side developments as well 
                            as Server-side developments.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="float-child">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java codes 
                            are generally more maintainable 
                            because Java does not allow many 
                            things which may lead to 
                            bad/inefficient programming if used 
                            incorrectly. For example, 
                            non-primitives are always references
                            in Java. So we cannot pass large
                            objects (like we can do in C++) to 
                            functions, we always pass references 
                            in Java. One more example, since there
                            are no pointers, bad memory access 
                            is also not possible. When compared 
                            with Python, Java kind of fits between
                            C++ and Python. The programs are written
                            in Java typically run faster than 
                            corresponding Python programs and slower 
                            than C++. Like C++, Java does static 
                            type checking, but Python does not.
                            
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="float-child">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java codes 
                            are generally more maintainable 
                            because Java does not allow many 
                            things which may lead to 
                            bad/inefficient programming if used 
                            incorrectly. For example, 
                            non-primitives are always references
                            in Java. So we cannot pass large
                            objects (like we can do in C++) to 
                            functions, we always pass references 
                            in Java. One more example, since there
                            are no pointers, bad memory access 
                            is also not possible. When compared 
                            with Python, Java kind of fits between
                            C++ and Python. The programs are written
                            in Java typically run faster than 
                            corresponding Python programs and slower 
                            than C++. Like C++, Java does static 
                            type checking, but Python does not.
                            
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="float-child">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Java Programming Language
                        </h1>
                        <p class="text-small">
                            When compared with C++, Java codes 
                            are generally more maintainable 
                            because Java does not allow many 
                            things which may lead to 
                            bad/inefficient programming if used 
                            incorrectly. For example, 
                            non-primitives are always references
                            in Java. So we cannot pass large
                            objects (like we can do in C++) to 
                            functions, we always pass references 
                            in Java. One more example, since there
                            are no pointers, bad memory access 
                            is also not possible. When compared 
                            with Python, Java kind of fits between
                            C++ and Python. The programs are written
                            in Java typically run faster than 
                            corresponding Python programs and slower 
                            than C++. Like C++, Java does static 
                            type checking, but Python does not. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="float-child">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            What is Machine Learning?
                        </h1>
                        <p class="text-small">
                            Machine Learning is the field of study 
                            that gives computers the capability to 
                            learn without being explicitly 
                            programmed. ML is one of the most exciting
                            technologies that one would have ever 
                            come across. As it is evident from the 
                            name, it gives the computer that makes 
                            it more similar to humans: The ability 
                            to learn. Machine learning is actively 
                            being used today, perhaps in many more 
                            places than one would expect.
                        </p>
                    </div>
                </div>
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