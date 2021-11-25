import styled from "styled-components"

const StyledMaxwidth = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg}px;
  padding: 0 ${({ theme }) => theme.util.buffer * 4}px;
  /* margin: 0 auto; */
`;

const MaxWidth = ({ children }) => {
  return (
    <StyledMaxwidth>
      {children}
    </StyledMaxwidth>
  )
}

export default MaxWidth