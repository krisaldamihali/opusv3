import './App.css';
import {BrowserRouter, Link, Routes, Rout} from 'react-router-dom'
import logophoto from './logophoto.jpg' 

function App() {
  return (

    <div className='row'>
      <div className='column'>
        <h2>June 2022</h2>

        <img src='https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdW50ZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />

        <p1 className='textbeg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla arcu a sapien pretium, at auctor urna accumsan. Ut malesuada magna ipsum, quis facilisis metus aliquam a. Maecenas scelerisque diam vitae sapien tincidunt venenatis. Vestibulum sit amet augue dapibus, interdum velit nec, scelerisque mauris. Pellentesque at odio fringilla, suscipit mi eget, semper sapien. Aenean porttitor, enim a molestie mollis, leo nisi commodo urna, a imperdiet leo augue sed nisi. Morbi ac dolor nec nisl condimentum auctor. Vivamus scelerisque tellus non quam sollicitudin, id lacinia sem elementum.

                                Vestibulum venenatis ex sit amet mi venenatis, eget faucibus mauris ornare. Fusce aliquet maximus diam, ac finibus lacus varius ut. Praesent interdum dolor a enim tincidunt, eget bibendum orci commodo. Donec dapibus, neque non feugiat vestibulum, ligula eros vehicula velit, nec sagittis erat leo quis elit. Donec ante justo, cursus quis imperdiet in, molestie a nulla. Sed mattis nec tortor et feugiat. Phasellus sed placerat odio. Mauris venenatis mauris at arcu posuere, id varius neque aliquet. Nunc aliquam mi et orci iaculis malesuada.</p1>
        
      </div>
    
      <div className='column'>

        <div className='logophoto'>
          
          <img src={logophoto} />
        </div>
        

        <div className='logotittle'>
          <h1>Opus</h1>
        </div>
        <div className='button'>

          <p1>An app which gives the user the idea of a safe
 
            and serious virtual space to create a
 
            volunteering network. the app should feel
 
            inclusive, simple and reliable</p1>

        </div>

        
        
        





        <div className='button'>
          <form action="/action_page.php">
            <input type="checkbox" id="agecheck" name="agecheck" value="Age" />
            <label for="vehicle1"> I am over the age of 14</label>
          </form>
        </div>
        
        <div className='button'>
          <BrowserRouter>

            <button className='buttontext'>
              Sign Up
            </button>
                    
          </BrowserRouter>
        </div>

        <div className='button' >
          <BrowserRouter>

            <button className='buttontext'>
              Sign In
            </button>

          
          </BrowserRouter>
        </div>
      </div>


          




      <div className='column'>
        <h2>July 2022 </h2>

        <img className='exphoto' src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dm9sdW50ZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>

        <p1 className='textbeg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla arcu a sapien pretium, at auctor urna accumsan. Ut malesuada magna ipsum, quis facilisis metus aliquam a. Maecenas scelerisque diam vitae sapien tincidunt venenatis. Vestibulum sit amet augue dapibus, interdum velit nec, scelerisque mauris. Pellentesque at odio fringilla, suscipit mi eget, semper sapien. Aenean porttitor, enim a molestie mollis, leo nisi commodo urna, a imperdiet leo augue sed nisi. Morbi ac dolor nec nisl condimentum auctor. Vivamus scelerisque tellus non quam sollicitudin, id lacinia sem elementum.

          Vestibulum venenatis ex sit amet mi venenatis, eget faucibus mauris ornare. Fusce aliquet maximus diam, ac finibus lacus varius ut. Praesent interdum dolor a enim tincidunt, eget bibendum orci commodo. Donec dapibus, neque non feugiat vestibulum, ligula eros vehicula velit, nec sagittis erat leo quis elit. Donec ante justo, cursus quis imperdiet in, molestie a nulla. Sed mattis nec tortor et feugiat. Phasellus sed placerat odio. Mauris venenatis mauris at arcu posuere, id varius neque aliquet. Nunc aliquam mi et orci iaculis malesuada.</p1>
      </div>
    </div>
  );  
}

export default App;
