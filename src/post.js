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
    const [display, setDisplay] = useState("postDiv")
    const showText=()=>{
        setShowDescription(true)
        setDisplay("postDiv2")

    }
    const removeText= () =>{
        setShowDescription(false)
    }

    return(
            <div className={display}>
                <img id ="photo" className ="picture" src={props.pic}/> 
                <h1 className= "header">{props.anouncement}</h1>
                <p className = 'text small'> {props.description}</p>
                <button onClick={showText}>{props.input}</button>
                {
                    showDescription && ( 
                        <div >

                            <p> {props.fullDescription} </p>
                            <button onClick={removeText}>
                                <AiFillCloseCircle size={30}/>
                            </button>
                        </div>
                )}
                
                
            </div>
    )
}
export default Post