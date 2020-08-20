import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostLists from './components/PostLists';
import PostForm from './components/PostForm';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch >
        <Route path="/" exact component={() => <Home />} />
        <Route path="/postLists" exact component={() => <PostLists />} />
        <Route path="/useState" exact component={() => <UseState />} />
        <Route path="/useEffect" exact component={() => <UseEffect />} />
        <Route path="/useReducer" exact component={() => <UseReducer />} />
        </Switch >
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
