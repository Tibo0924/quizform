import React from 'react';
import validator from 'email-validator';
import './style.css';

class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comment: '',
      email: '',
      error: false
    }
  }

  inputChange = (e) => {
    if (e.target.type === 'textarea'){
      this.setState({
        comment: e.target.value
      })
    } else {
      this.setState({
        email: e.target.value
      })
    }
  }

  emptyFields = () => {
    this.setState({
      comment: '',
      email: '',
      error: false,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { comment, email } = this.state;
    if(validator.validate(email)) {
      const payload = {
        comment,
        email
      };
      fetch( '/' ,{
        method: 'POST',
        body: JSON.stringify(payload),
      })
        .then(() => this.emptyFields())
        .catch(err => console.log(err));
    } else {
      this.setState({ error: true })
    }
  }
  
  render(){
    const { error, email, comment } = this.state;
    return(
      <div className="main">
        <form onSubmit={this.onSubmit}>      
          <h3>Any other comments?</h3>
          ​<textarea
            onChange={this.inputChange}
            id="txtArea"
            value={comment}
          />
          <p>Your comment will be public. Please don't mention any personal details or names.<br></br>
            By commenting you agree to our <a href="https://www.google.com/search?q=terms+of+use">terms of use</a>. Read our <a href="https://www.google.com/search?q=privacy+policy">privacy policy</a>.
          </p>
          <h3>Please provide your email address</h3>
          <p>We will send you an email to confirm that all feedback is genuine.</p>
          <input
            onChange={this.inputChange}
            value={email}
            name="email"
            title="Email required" 
            type="email"
            placeholder="john@example.com"
          />
          { error && <p>Please enter a valid email!</p> }
          <br/>
          <button type="submit">
            Save comment
          </button>
          <button 
            onClick={this.emptyFields}
            type="reset"
          >
            Cancel
          </button>
      </form>
    </div>
    )
  }
};

export default Comments;