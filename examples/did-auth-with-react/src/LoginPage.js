import React, { useContext } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { ContactDetails, ContactBox } from './LoginPage-style.js'
import epic from './EpicHeader.png'
import { DidSessionContext } from '@arcblock/did-connect/lib';

function LoginPage() {
  const { session } = useContext(DidSessionContext);
  let sessionMarkup = null;
    if (session.loading) {
      sessionMarkup = <p>Initialize session...</p>;
    } else {
      if (session.user) {
        sessionMarkup = (
          <ContactDetails> 
          <p>
            We have sent a hash of <strong>{session.user.email}</strong>'s details to be added to a contact tracing solution. Thank you for making the world a safer place in a secure way.
            You are logged in as <strong>{session.user.email}</strong>, click{' '}
            <a onClick={() => session.logout()} href="javascript:void(0);" className="App-link">
              here
            </a>{' '}
            to logout
          </p>
            </ContactDetails>
        );
      } else {
        sessionMarkup = (
            <ContactBox> 
              <ContactDetails> 
            <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Button type='submit' onClick={() => session.login()}>Submit </Button>
            </Form>
            </ContactDetails>
            </ContactBox>
        );
      }
    }

  return (
    <ContactBox> 
  <img src={epic} className="App-logo" alt="logo" />
  {sessionMarkup}
  </ContactBox> 
  )
}

export default LoginPage

// import React, { Component } from 'react';
// import './App.css';

// class LoginPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//       error: '',
//     };

//     this.handlePassChange = this.handlePassChange.bind(this);
//     this.handleUserChange = this.handleUserChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.dismissError = this.dismissError.bind(this);
//   }

//   dismissError() {
//     this.setState({ error: '' });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();

//     if (!this.state.username) {
//       return this.setState({ error: 'Username is required' });
//     }

//     if (!this.state.password) {
//       return this.setState({ error: 'Password is required' });
//     }

//     return this.setState({ error: '' });
//   }

//   handleUserChange(evt) {
//     this.setState({
//       username: evt.target.value,
//     });
//   };

//   handlePassChange(evt) {
//     this.setState({
//       password: evt.target.value,
//     });
//   }

//   render() {
//     // NOTE: I use data-attributes for easier E2E testing
//     // but you don't need to target those (any css-selector will work)

//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           {
//             this.state.error &&
//             <h3 data-test="error" onClick={this.dismissError}>
//               <button onClick={this.dismissError}>✖</button>
//               {this.state.error}
//             </h3>
//           }
//           <label>User Name</label>
//           <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

//           <label>Password</label>
//           <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

//           <input type="submit" value="Log In" data-test="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginPage;