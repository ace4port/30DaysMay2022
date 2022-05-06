import styled from 'styled-components'
import { colors } from '../misc'

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: ${props => props.alignItems ?? 'start'};
  justify-content: ${props => props.justify ?? 'start'};
`
