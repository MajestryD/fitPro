import React, { Component } from "react";
import axios from "axios";

/*const LoginPage = () => {
    return (
      <div>
        <h1>Login Page</h1>
        <a href="http://localhost:2500/auth/facebook">Login with Facebook</a>
      </div>
    );
  };

export default LoginPage;*/

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false, contentCalled: null };
    }

    handleClick = (e) => {
        e.preventDefault();
        window.open("http://localhost:2500/auth/facebook","_self")
    }

    handleLogout = (e) => {
        e.preventDefault();
        window.open("http://localhost:2500/auth/logout","_self")
    }

    getContent = (e) => {
        e.preventDefault();
        axios.get("http://localhost:2500/auth/profile", { withCredentials: true })
            .then(res => {
                if(res.data.user){
                    this.setState({ isLoggedIn: true, contentCalled: JSON.stringify(res.data.user) })
                }else{
                    this.setState({ isLoggedIn: false, contentCalled: JSON.stringify(res.data) })
                }
                
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        axios.get("http://localhost:2500/auth/profile", { withCredentials: true })
            .then(res => {
                if (res.data.user != null) {
                    this.setState({ isLoggedIn: true, contentCalled: JSON.stringify(res.data.user) })
                } else {
                    this.setState({ isLoggedIn: false })
                }
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>

                <div> Log in Status {this.state.isLoggedIn.toString()}</div>

                {this.state.isLoggedIn ? (
                    <p>This content is visible only to logged-in users.</p>
                ) : (
                    <p>Please log in to view this content.</p>
                )}

                <div>
                    {this.state.contentCalled}
                </div>

                <a href="http://localhost:2500/auth/facebook"> Click me </a>

                <button onClick={this.handleClick}> Log in </button>
                <button onClick={this.handleLogout}> Log out </button>

                <button onClick={this.getContent}> Get Info</button>
            </div>
        )
    }
};