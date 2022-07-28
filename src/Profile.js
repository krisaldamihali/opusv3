import { logDOM } from '@testing-library/react';
import React from 'react';
import './Profile.css';
import hands from "./hands.png"
import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdNotifications} from "react-icons/md"
import {BrowserRouter , Link, Routes, Route} from 'react-router-dom'

function Profile(props) {
    

    return (
        <div>
 
            
            <div className='profile'>
                
                <div >
                    <div>

                    <img src="https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg" />

                    </div>
                
                </div>
                <div >
                    <h1 className='h1'>
                    John Smith 
                    </h1>
                    <h2 className='h2'>
                    Description:
                    </h2>
                    <h3 className='h3'>
                    Sponsorship is a business relationship between a provider of funds, resources, or services and an individual, event, or organization which offers in return some rights and associations that may be used for commercial advantage.                  
                    </h3>
                    <h2 className='h2'>
                    Tags:
                    </h2>
                    <button button disabled={true} className='button'>
                    Animals
                    </button>
                    <button button disabled={true} className='button'>
                    CSS
                    </button>
                    <button button disabled={true} className='button'>
                    Environment
                    </button>
                    <button className="buttonAdd">
                    Add Tags
                    </button>
                    <h2 className='h2'>
                    Skills:
                    </h2>
                    <button disabled={true} className='button'>
                    CSS God
                    </button>
                    <button button disabled={true} className='button'>
                    Business managment
                    </button>
                    <button button disabled={true} className='button'>
                    Guitar
                    </button>
                    <button  className="buttonAdd">
                    Add Skills
                    </button>
                    <div>
                        <button  className="buttonAddPost">
                        Add Post
                    </button>
                    </div>
                </div>
              
                
            </div>  
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}
  
export default Profile

//   <div className="App">
    //     <header className="App-header">
    //       <p className="" alt= "profile">
    //         My profile!
    //       </p>
    //       <img src={photo} className="App-logo" alt="logo" />
    //       <p className="App-description" alt= "description">
            
    //       </p>
        
    //     </header>
    //     <div className="App">
      
    //     <p className="App-description" alt= "description">
          
    //     </p>
      
    // </div>
    //   </div>
