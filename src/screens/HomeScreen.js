import React from 'react'
import {Link} from 'react-router-dom'
import {FullWidthContainer, ScreenContainer} from '../sharedComponents/containers'
import {NewClimbButton, ClimbHistoryButton} from '../sharedComponents/buttons'

export default function HomeScreen() {
  return (
    <ScreenContainer>

      <FullWidthContainer>
        <Link to="/newEntry" style={{width:'100%'}}>
          <NewClimbButton>
            New climb
          </NewClimbButton>
        </Link>
      </FullWidthContainer>
      
      <FullWidthContainer>
      <Link to="/newEntry" style={{width:'100%'}}>
      <ClimbHistoryButton>
        See my climbs
      </ClimbHistoryButton>
      </Link>
      </FullWidthContainer>
      
    </ScreenContainer>
  )
}