import styled from 'styled-components'

interface CustomLabelProps {
  fontSize?: string
  color?: string
}

export const CustomText = styled.label<CustomLabelProps>`
  font-size: ${(props) => props.fontSize || '12px'};
  color: ${(props) => props.color || '#000'};
`
