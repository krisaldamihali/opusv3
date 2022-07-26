import './App.css';

function App() {
  return (

    <div className='row'>
      <div className='column'>
        <h1>hallo</h1>
      </div>
    
      <div className='column'>
        <form action="/action_page.php">
          <input type="checkbox" id="agecheck" name="agecheck" value="Age" />
          <label for="vehicle1"> I am over the age of 14</label>


          <button
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='http://google.com';
            }}
            > Sign Up
          </button>


          <button
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='http://google.com';
            }}
            > Sign In
          </button>


        </form>
      </div>
      <div className='column'>
        <h1>hallo agian</h1>
      </div>
    </div>
  );  
}

export default App;
