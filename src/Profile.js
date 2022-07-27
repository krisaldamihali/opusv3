import {FaRegUserCircle} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdNotifications} from "react-icons/md"

function Profile() {
    return (
        div>
        <nav >
            <div >
                <img src={hands}/>
            </div>
            <div >
                <input type="text" name="search" id="search" />
                <button >Search</button>
            </div>
            <div >
                <ul class="nav-list">
                    <li><div onClick={()=>{alert('profile')}}><FaRegUserCircle size={35} /></div></li>
                    <li><div onClick={()=>{alert('clicked')}}><FiSettings size ={35} /></div></li>
                    <li><div onClick={()=>{alert('clicked')}}><BsFillChatDotsFill size ={35}/></div></li>
                    <li><div onClick={()=>{alert('clicked')}}><MdNotifications size ={35} /></div></li>
                </ul>
            </div>
        </nav>

        
    
      
      
    );
  }
  
  export default Profile;



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