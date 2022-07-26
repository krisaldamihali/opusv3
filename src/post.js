import { logDOM } from '@testing-library/react';
import React from 'react';
import './App.css';
import './styles.css'

import hand from "./hands.png"

const Post = ()=>{
    return(
        <div>
            <div>
                <img className ="picture" src={hand}/> <p>developp with us</p>
            </div>

        </div>
    )
}
export default Post