import styled from 'styled-components'
import {Colors} from './colors'

export const ShortInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${Colors.lichen};
  border-radius: 4px;
  box-sizing: border-box;
`

export const CheckBox = styled.input`
  display: inline-block;
  border: 1px solid ${Colors.lichen};
  border-radius: 4px;
`
export const DropDown = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid ${Colors.lichen};
  border-radius: 4px;
  box-sizing: border-box;
`

export const InputLabel = styled.label`
  width: 100%;
  display: inline-block;
  color: white;
`

export const CheckBoxLabel = styled.label`
  display: inline-block;
  color: white;
`