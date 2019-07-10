import React, { Component } from "react";
// import { Col, Row, Container } from "../components/Grid";
import Wrapper from "../components/Wrapper";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Login from "../components/Login";
import Register from "../components/Register";

class User extends Component {
    state = {
      regusername:"",
      regpassword:"",
      logusername:"",
      logpassword:"",
    };

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
    }
    // componentDidMount() {
    //     API.searchAllUsers()
    //         .then(results => {
    //             this.setState({  results: results.results})
    //         })
    //         .catch(err => { console.log(err) });
    //     API.searchAllUserById(this.state.results.id)
    //         .then(results => {
    //             console.log(results.results);
    //         })
    // }

    handleRegisterSubmit = (event) => {
        event.preventDefault();
        API.registerUser({
            username: this.state.regusername,
            password: this.state.regpassword
        })
    };

    handleLoginSubmit = event => {
        event.preventDefault();
        API.loginUser({
            username: this.state.logusername,
            password: this.state.logpassword
        })
        .then(res => {
        if (res.status === 200) {
        this.props.history.push('/');
        } else {
        const error = new Error(res.error);
        throw error;
        }
    })
    };

    // //handle user saving 
    // handleSaveUser = item => {
    //     API.saveUser({
    //      //write code
    //     })
    //         .then(res => console.log("saved "))
    //         .catch(err => console.log(err));
    // }

    render() {
        return (
          <Wrapper>
        
                  <Register
                    handleRegisterSubmit={this.handleRegisterSubmit}
                    handleRegisterChange={this.handleInputChange}
                    username={this.state.regusername}
                    password={this.state.regpassword}
                    />
                     
                  <Login
                    handleLoginSubmit={this.handleLoginSubmit}
                    handleLoginChange={this.handleInputChange}
                    username={this.state.logusername}
                    password={this.state.logpassword}
                    />
         

            </Wrapper>
        )
    }
}

export default User;