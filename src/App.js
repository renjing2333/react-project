import './App.css';
import Home from './components/Home'
// import { Router} from "react-router-dom"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import {appRoutes} from './routes'
function Com1 () {
  return <div>111</div>
}

function App() {
  return (
    <div className="App">
        <Route path="./home" component="./components/Home.js" />
    </div>
  );
}

export default App;
