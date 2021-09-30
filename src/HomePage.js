import App from './App';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import signUp from './signup';
import logIn from './login';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formState: true,
        signupform: "/",
        loginform: ""
    };
  }

    flipContent = () => {
  
      // this.setState({ formState: !formState })
      if (this.formState==true)
        { this.setState({ signupform: "/", loginform: ""}); }
      else 
        { this.setState({ signupform: "uuuuu", loginform: "/"}); }
    }

  render(){
    return (
      <div>
        <h2>Latest Updates!</h2>
      
      <div className="h1 bg-suceess text-white text-center p-2">
          { this.state.signupform }
          hey {this.state.formState} h
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.flipContent}>
            Click Me
            </button>
          
        </div>

        <div className="leftcontainer">
          <p>news </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ultricies diam, at hendrerit erat porttitor ut. Nullam sit amet ullamcorper odio, ut iaculis nibh. Suspendisse potenti. Nullam et nibh quis tellus tristique convallis. Vivamus faucibus, erat sit amet accumsan pretium, purus diam imperdiet lorem, facilisis posuere turpis nibh eget nibh. Vestibulum sit amet erat faucibus, dignissim felis sit amet, accumsan leo. Sed gravida orci a erat porta placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel odio libero. Morbi mattis leo id aliquet commodo. Nulla lobortis mattis felis, sed hendrerit urna lobortis vel. Nullam aliquam magna et est pretium tempus. Cras felis nibh, rhoncus a nibh vitae, gravida suscipit ante. Fusce id sapien sit amet massa bibendum ornare non in risus.</p>
          <p>Curabitur laoreet nulla at tortor aliquam, at interdum augue gravida. Nulla molestie sem elementum, dictum orci nec, rutrum risus. Suspendisse id auctor urna. Duis nec urna semper, malesuada massa at, dictum mi. Aenean lectus velit, mattis in quam sed, porta dignissim mi. Donec non consectetur turpis, vitae ultrices justo. Donec tincidunt iaculis feugiat. Phasellus sit amet facilisis augue. Nam aliquam faucibus pharetra. Suspendisse potenti.</p>
          <p>Phasellus ut tellus ut libero sodales tincidunt ut in risus. Quisque gravida dui in vehicula lobortis. Aliquam bibendum elit sit amet leo molestie, eu venenatis lacus tempus. Aliquam ac erat suscipit, vehicula dui id, dictum neque. Duis vel metus sodales, feugiat nibh in, hendrerit massa. Phasellus fringilla posuere tellus, aliquam scelerisque lacus sodales et. Duis accumsan diam turpis, sit amet bibendum ligula hendrerit a. Mauris maximus nisl id blandit semper. Vivamus libero ligula, molestie sit amet varius sed, suscipit ut lacus. Aliquam nec luctus ipsum. Mauris sem arcu, rhoncus ac elit id, consectetur faucibus magna. Quisque in euismod sapien. Maecenas vitae erat pulvinar, mattis mi et, pellentesque tellus. Suspendisse tincidunt aliquet ornare. Suspendisse laoreet mollis imperdiet.</p>
        </div>
          <form className="containerForm"/* action="signup.php" */ >
            <div className="container">
            <Router>
              <div>
                <ul className="">
                  <li><a href="/">Sign Up</a></li>
                  <li><a href="/">Login</a></li>
                </ul>
                  <hr />
                <Switch>
                  <Route exact path={"/"} component={signUp} />
                  <Route exact path={this.state.signupform} component={logIn} />
                </Switch>
              </div>
            </Router>
              <h1>Sign Up</h1>
              <p>Sign Up for Free</p>
              {/* <hr> */}

              <label for="name"><b>Name</b></label>
              <input type="text" placeholder="Enter Name" name="name" required />
              
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

              <p>By creating an account you agree to our <a href="#" >Terms  Privacy</a>.</p>

              <div class="clearfix">
              {/* <button type="button" class="cancelbtn">Cancel</button> */}
              <button type="submit" class="signupbtn">Sign Up</button>
              {/* <div class="btnspace">&nbsp;</div> */}
                {/* <button type="button" class="loginbtn">Log in</button> */}
              </div>
              <p>Already have an account? Login Here!</p>
            </div>
          </form>
      </div>
    );
  }
}


export default HomePage;