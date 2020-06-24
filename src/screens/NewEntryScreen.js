import React from 'react';
import {ScreenContainer, FullWidthContainer} from '../sharedComponents/containers'
import {NewClimbButton} from '../sharedComponents/buttons'
import { 
  DropDown,
  InputLabel,
  ShortInput} from '../sharedComponents/formComponents'


class NewEntryScreen extends React.Component {
  state = {
    grade:'',
    routeName:'',
    type:'',
    style:'',
    gear:'',
    pitches:1,
    country:'***',
    area:'***',
    sector:'***',
    comments:'***',
    stars:0
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})
  }

  handleSubmit(event) {
    alert('A type was submitted: ' + this.state.type);
    event.preventDefault();
  }

  render() {
    return(
      <ScreenContainer>
      <div style={{padding:32}}>
      <form onSubmit={this.handleSubmit}>

        <InputLabel>Grade</InputLabel>
        <ShortInput
          type='text'
          name='grade'
          value={this.state.grade}
          placeholder='5.8, 10a, 6b+, V4, ...'
          onChange={this.handleChange}
        />

        <InputLabel>Route name</InputLabel>
        <ShortInput
          type='text'
          name='routeName'
          value={this.state.routeName}
          onChange={this.handleChange}
        />

        <InputLabel>Type</InputLabel>
        <DropDown   
          name='type'
          value={this.state.type}
          onChange={this.handleChange}>
            <option value='gym'>Gym</option>
            <option value='outdoor'>Outdoor</option>
        </DropDown>

        <InputLabel>Style</InputLabel>
        <DropDown 
          name='style'
          value={this.state.style}
          onChange={this.handleChange}>
            <option value='onsight'>Onsight</option>
            <option value='redpoint'>Red Point</option>
            <option value='toprope'>Top Rope</option>
        </DropDown>

        <InputLabel>Gear</InputLabel>
        <DropDown 
          name='gear' 
          value={this.state.gear}
          onChange={this.handleChange}>
          <option value='sport'>Sport</option>
          <option value='trad'>Trad</option>
          <option value='mixed'>Mixed</option>
        </DropDown>

        <InputLabel>Number of pitches</InputLabel>
        <ShortInput
          type='number'
          name='pitches'
          value={this.state.pitches}
          onChange={this.handleChange}
        />

        <InputLabel>Date</InputLabel>
        <ShortInput
          type='date'/>

      </form>

      <FullWidthContainer>
      <NewClimbButton>Add climb</NewClimbButton>
      </FullWidthContainer>
      
      </div>
      </ScreenContainer>
    )
  }
  
}

export default NewEntryScreen