import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Home from './components/Home';

class App extends Component {
  render(){
    return (
      <div>
        <Router>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/home" component={Home}></Route>
        </Router>
      </div>
    )
  }
}

export default App;
