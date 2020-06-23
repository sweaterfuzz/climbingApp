import React from 'react';
import {ScreenContainer} from '../sharedComponents/containers'
import { 
  DropDown,
  CheckBox,
  CheckBoxLabel,
  InputLabel,
  ShortInput} from '../sharedComponents/formComponents'


class NewEntryScreen extends React.Component {
  state = {
    Grade:'10a'
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
      
      <form  
        onSubmit={this.handleSubmit}
        style={{padding:32}}>

        <InputLabel>Grade</InputLabel>
        <ShortInput
          type='text'
          id='grade'
          name='Grade'
          placeholder='5.8, 10a, 6b+, V4, ...'
          onChange={this.handleChange}
        />

        <InputLabel>Type</InputLabel>
        <DropDown>
          <option value='gym'>Gym</option>
          <option value='singlePitch'>Outdoor</option>
        </DropDown>

        <InputLabel>Style</InputLabel>
        <DropDown>
          <option value='onsight'>Onsight</option>
          <option value='redpoint'>Red Point</option>
          <option value='toprope'>Top Rope</option>
        </DropDown>

        <CheckBoxLabel>Trad</CheckBoxLabel>
        <CheckBox type='checkbox'/> 

        <InputLabel>Date</InputLabel>
        <ShortInput
          type='date'/>



      </form >
        
      </ScreenContainer>
    )
  }
  
}

export default NewEntryScreen