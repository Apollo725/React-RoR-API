import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      username,
      password,
    } = this.state;
    
    if (username === 'Admin' && password === 'test1A') {
      const user = {...this.state};
      localStorage.setItem('user', JSON.stringify(user));
      this.props.history.push('/');
    } else {
      alert('Invalid Crediential');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className="session-page">
        <span className="session-page-logo">Welcome</span>
        <div className="session-form-container">
        <div className="session-form-top-section">
          <h2 className="session-form-header">Login</h2>
        </div>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <input 
              className="session-form-input" 
              type="text" 
              onChange={this.update('username')} 
              value={this.state.username} 
              placeholder="username">
            </input>
            <input 
              className="session-form-input" 
              type="password" 
              onChange={this.update('password')} 
              value={this.state.password} 
              placeholder="Password">
            </input>
            <button 
              className="session-form-submit" 
              type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
