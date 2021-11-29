import styled from "styled-components"

const StyledMaxwidth = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md}px;
  padding: 0 ${({ theme }) => theme.util.buffer * 4}px;
`;

const MaxWidth = ({ children }) => {
  return (
    <StyledMaxwidth>
      {children}
    </StyledMaxwidth>
  )
}

export default MaxWidth
