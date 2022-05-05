import styled from 'styled-components'
import { colors } from '../../misc'

export const AvatarStyled = styled.div`
  margin: 2px;
  border-radius: 50%;

  width: ${(props) => (props.size === 'large' ? 56 : 40)}px;
  height: ${(props) => (props.size === 'large' ? 56 : 40)}px;

  text-align: center;
  vertical-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.noImg ? colors.gray : '')};
  p {
    color: white;
    font-size: 1.5rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const BorderedAvatarStyled = styled.div`
  border: 2px solid ${(props) => props.outline ?? 'red'};
  border-radius: 50%;
  width: fit-content;
  margin: 2px;
`

export const CharAvatarStyled = styled.div`
  position: relative;
  width: fit-content;
  &::after {
    position: absolute;
    right: 0;
    bottom: 2px;
    content: '';
    width: 8px;
    height: 8px;
    outline: 2px solid white;
    background-color: ${(props) =>
      props.status === 'online'
        ? colors.success
        : props.status === 'away'
        ? colors.error
        : colors.gray};
    border-radius: 50%;
  }
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: ${(props) => props.alignItems ?? 'start'};
`

export const PostAuthorStyled = styled(Flex)`
  p {
    text-align: left;
    span {
      color: gray;
      font-size: 0.9rem;
      display: block;
    }
  }
`
