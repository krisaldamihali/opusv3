import './App.css';
import './styles.css'
import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from './firebase_config.js';


import hand from "./hands.png"
import {AiFillCloseCircle} from "react-icons/ai";
import { FaRegClosedCaptioning } from 'react-icons/fa';


const Post = (props)=>{
    const [showDescription, setShowDescription] = useState(false)
    const showText=()=>{
        setShowDescription(true)

    }
    const removeText= () =>{
        setShowDescription(false)
    }

    return(
        <div>
            <div className='postDiv'>
                <h1 className= "text-big">{props.anouncement}</h1>
                <img className ="picture" src={props.pic}/> <p className = 'text small'> {props.description}</p>
                <button onClick={showText}>{props.input}</button>
                {
                    showDescription && ( 
                        <div>

                            <p> {props.fullDescription} </p>
                            <button onClick={removeText}>
                                <AiFillCloseCircle size={30}/>
                            </button>
                        </div>
                )}
                
                
            </div>

        </div>
    )
}
export default Post