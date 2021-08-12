import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmY0ZTk5ODc3NGQ5Y2JjYThhNzZhNCIsImVtYWlsIjoibWVnQGdtLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjczNDQ1NDIsImV4cCI6MTYyOTkzNjU0Mn0.GXuB1cl7-pvbnpN7l_Wy3JPbmkicCmHzwVfnctlqMhA`;


function App() {
  const user = true
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
