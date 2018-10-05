import React from 'react'
import PropTypes from 'prop-types'
import './style.css';


class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reasonInput: '',
    }
  };

  onReasonInputChange = (e) => {
      this.setState({
        reasonInput: e.target.value,
      })
  }

  onSubmit = (e) => {
    const { addReason } = this.props;
    const { reasonInput } = this.state;
    e.preventDefault();
    if(reasonInput){
      addReason(reasonInput)
      this.setState({
        reasonInput: '',
      });
    }
  }

  render(){
    const { reasonInput } = this.state;
    return(
      <div className="main">
        <form onSubmit={this.onSubmit}>    
          <h3>Why do you feel this way?</h3>
          <input  
            value={reasonInput}
            onChange={(e) => this.onReasonInputChange(e)}
            title="Please tell us a reason"
            type="text"
            placeholder="Add keywords to add reasons" 
          />
        </form>  
      </div>
    )
  }
};

Form.propTypes = {
  addReason: PropTypes.func.isRequired,
}

export default Form