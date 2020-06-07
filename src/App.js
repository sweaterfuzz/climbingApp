import React from 'react';
import './App.css';
import {FullWidthContainer, ScreenContainer} from './sharedComponents/containers'
import {NewClimbButton, ClimbHistoryButton} from './sharedComponents/buttons'

function App() {
  return (
    <ScreenContainer>

      <FullWidthContainer>
      <NewClimbButton>
        New climb
      </NewClimbButton>
      </FullWidthContainer>
      
      <FullWidthContainer>
      <ClimbHistoryButton>
        See my climbs
      </ClimbHistoryButton>
      </FullWidthContainer>
      
    </ScreenContainer>
  );
}

export default App;
