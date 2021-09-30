import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import college from './college';
import visaInfo from './visainfo';
import socialHub from './socialhub';
import Page5 from './page5';



class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <ul className="headerUl">
          <li><a href="/">Home</a></li>
          <li><a href="/college">College</a></li>
          <li><a href="/visainfo">Visa Info</a></li>
          <li><a href="/socialhub">Social Hub</a></li>
          {/* <li><a href="/page5">Page 5</a></li> */}
        </ul>

        <hr />
        
        <Switch>
          {/* <Route exact path="/"><Home /></Route> */}
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/college"} component={college} />
          <Route path={"/visainfo"} component={visaInfo} />
          <Route path={"/socialhub"} component={socialHub} />
          <Route path={"/page5"} component={Page5} />
        </Switch>

        <footer>
          <p>Footer Bar</p>
        </footer>
      </div>
    </Router>
  );
  }
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }


export default App;