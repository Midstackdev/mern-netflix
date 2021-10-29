import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

const token  =  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))?.token 

if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else {
  axios.defaults.headers.common['Authorization'] = null;
}

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => !user ? <Redirect to='/register' /> : <Home/>} />
          <Route path="/series" exact render={() => !user ? <Redirect to='/login' /> : <Home type="series" />} />
          <Route path="/movies" exact render={() => !user ? <Redirect to='/login' /> : <Home type="movies" />} />
          <Route path="/watch" exact render={() => !user ? <Redirect to='/login' /> : <Watch/>} />
          <Route path="/login" exact render={() => user ? <Redirect to='/' /> : <Login/>} />
          <Route path="/register" exact render={() => user ? <Redirect to='/' /> : <Register/>} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
