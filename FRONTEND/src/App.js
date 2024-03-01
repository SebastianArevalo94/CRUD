import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/create' element= {<Create/>}/>
        <Route path='/update' element= {<Update/>}/>
      </Routes>
    </Router>
  );
}

export default App;
