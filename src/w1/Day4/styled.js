import styled from 'styled-components'

export const CardStyled = styled.div`
  width: 385px;
  // height: 385px;
  padding: 4px 0;
  border-radius: 4px;
  border: 1px solid #cccccc00;
  &:hover {
    border: 1px solid #a0a;
  }

  .card-body {
    img {
      width: 384px;
      height: 215px;
    }

    p {
      text-align: left;
    }
  }
`

export const StyledTab = styled.div`
  .body {
    background: rgba(196, 196, 196, 0.19);
    flex: 1;
    text-align: left;
    padding: 2rem;

    h2 {
      margin: 0;
    }
  }
`
export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${props => (props.active ? '#5D5FEF' : 'transparent')};
  cursor: pointer;
  // font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  margin: 0;
`
