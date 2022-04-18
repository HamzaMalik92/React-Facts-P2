import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  return (
   <div className='app'>
      <div className="page">
    <Navbar/>
    <br></br>
    <Main/>
    </div>
   </div>
  );
}

export default App;
