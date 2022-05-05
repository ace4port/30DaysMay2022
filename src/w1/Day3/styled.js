import styled from 'styled-components'
import { colors } from '../../misc'

export const Day3Styled = styled.div`
  background-color: ${colors.bg};
  min-height: calc(100vh - 20px);

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin 2rem 0;
    transition: all 0.3s ease-in-out;

    svg {
      color: #001E6C;
    }
  }
`

export const StyledIndicator = styled.span`
  background-color: ${props => (props.active ? '#001E6C' : colors.white)};
  height: 10px;
  width: 10px;
  display: inline-block;
  margin: 0 4px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.6s ease;
`

export const TestimonialStyled = styled.div`
  background-color: ${colors.white};
  width: 80%;
  border-radius: 16px;
  padding: 42px 36px;
  margin: 0 auto;
  text-align: left;

  .imgWrap {
    width: 181px;
    height: 181px;
    border-radius: 50%;

    // outline: 2px solid ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2px;
    margin: 2px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .side {
    flex: 1;
    h4 {
      font-size: 24px;
      font-weight: 700;
    }

    p {
      color: #3d3d3d;
      text-align: justify;
    }
    span {
      color: #525252;
      font-size: 12px;
    }
  }
`

export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  .imgWrap {
    width: 181px;
    height: 181px;
    border-radius: 50%;
  }

  p {
    text-align: justify;
  }
`
