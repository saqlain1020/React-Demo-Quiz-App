import React, { Component } from 'react';

class Login extends Component {
    state={
        username: "",
        password: ""
    }
    changeInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    submit=(e)=>{
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users"));
        let flag = true;
        users.forEach(element => {
            if(element.username === this.state.username && element.password === this.state.password){
                this.props.changeState(element.username);
                flag = false;
            }
        });
        if(flag)
            alert("Wrong Credentials");
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onChange={this.changeInput} onSubmit={this.submit}>
                    <input name="username" defaultValue={this.state.username} type="text" placeholder="UserName"/>
                    <input type="password" name="password" defaultValue={this.state.password} placeholder="Enter Password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;