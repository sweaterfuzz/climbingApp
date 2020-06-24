import React from 'react'
import {Link} from 'react-router-dom'
import {FullWidthContainer, ScreenContainer} from '../sharedComponents/containers'
import {NewClimbButton, ClimbHistoryButton} from '../sharedComponents/buttons'

export default function HomeScreen() {
  return (
    <ScreenContainer>

      <FullWidthContainer>
        <Link to="/newEntry">
          <NewClimbButton>
            New climb
          </NewClimbButton>
        </Link>
      </FullWidthContainer>
      
      <Link to="/newEntry">
      <FullWidthContainer>
      <ClimbHistoryButton>
        See my climbs
      </ClimbHistoryButton>
      </FullWidthContainer>
      </Link>
      
    </ScreenContainer>
  )
}