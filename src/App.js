// import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';



function App() {
  return (
    <div>

      <BrowserRouter>

       

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>

        </Switch>
      
      
      </BrowserRouter>

  </div>
  );
}

export default App;
