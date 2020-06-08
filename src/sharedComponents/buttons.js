import styled from 'styled-components'
import {Colors} from './colors'

export const ClimbingButton = styled.button`
  border-radius: 8px;
  border: none;
  font-size: 24px;
  padding: 8px;
  width: 240px;
  margin: 16px;
  color: ${Colors.almostBlack};
`
export const NewClimbButton = styled(ClimbingButton)`
  background-color: ${Colors.lichen};
`
export const ClimbHistoryButton = styled(ClimbingButton)`
  background-color: ${Colors.limestone};
`