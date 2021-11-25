import styled from 'styled-components'

const StyledText = styled.span`
  text-decoration: none;
`;

const Text = ({
  children,
  rest
}) => {
  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  )
}

export default Text
