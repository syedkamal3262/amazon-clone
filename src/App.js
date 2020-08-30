import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router ,Switch ,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import {useStateValue} from './components/StateProvider';
import {auth} from './Firebase.js'
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    }
    )
    return ()=>{
      unsubscribe();
    }
  }, [])
console.log(user)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Cart">
          <Header />
          <Checkout />
            <Footer />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
