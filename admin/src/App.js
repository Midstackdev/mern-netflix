import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Users from './pages/users/Users';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import axios from 'axios'
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';

const token  = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null
if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else {
  axios.defaults.headers.common['Authorization'] = null;
}


function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
      <Route path="/login" component={() => ( user ? <Redirect to="/"/> : <Login/>)} exact />
      {/* {user &&  */}
        <>
        <Topbar />
        <div className="container">
          <Sidebar />
            <Route path="/" component={() => ( !user ? <Redirect to="/login"/> : <Home/>)} exact />
            <Route path="/users" component={() => ( !user ? <Redirect to="/login"/> : <Users/>)} exact />
            <Route path="/users/new" component={() => ( !user ? <Redirect to="/login"/> : <NewUser/>)} exact/>
            <Route path="/users/:id" component={() => ( !user ? <Redirect to="/login"/> : <User/>)} exact/>
            <Route path="/movies" component={() => ( !user ? <Redirect to="/login"/> : <Products/>)} exact />
            <Route path="/products/new" component={() => ( !user ? <Redirect to="/login"/> : <NewProduct/>)} exact/>
            <Route path="/products/:id" component={() => ( !user ? <Redirect to="/login"/> : <Product/>)} exact/>
        </div>
        </>
      {/* } */}
      </Switch>
    </Router>
  );
}

export default App;
