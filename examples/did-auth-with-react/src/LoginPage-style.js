import styled from 'styled-components'

export const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  p{
      max-width: 75%;
  }
  h3{
    font-size: 30px;
    color: #7fa1e8;
    font-weight: 300;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`