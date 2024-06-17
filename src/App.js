import './essentials/css/App.css';
import Nav from './components/appComponents/NavBar/NavBar';
import Food from './components/apitest';
import DisplayBodyPart from './components/exerciseComponents/displayBodyPart';
import Main from './components/main';
import { Routes, Link, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App dark">

        <Nav />
        <div className='AppBody'>
          <Routes>
            <Route path="/about" element = {<Food/> }/>
            <Route path="/" element = {<DisplayBodyPart/> }/>
          </Routes>

        </div>


      </div>
  );
}

export default App;
