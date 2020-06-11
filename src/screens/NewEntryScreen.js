import React from 'react';
import {ScreenContainer} from '../sharedComponents/containers'


class NewEntryScreen extends React.Component {
  state = {
    numberGrade: 10,
    letterGrade: 'a',
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})
  }

  handleSubmit(event) {
    alert('An grade was submitted: ' + this.state.numberGrade);
    event.preventDefault();
  }

  render() {
    return(
      <ScreenContainer>
      
      <form onSubmit={this.handleSubmit}>
        <label>
          number grade:
          <textarea 
            
            name='numberGrade'
            onChange={this.handleChange} />        
        </label>
      </form>
        
      </ScreenContainer>
    )
  }
  
}

export default NewEntryScreen