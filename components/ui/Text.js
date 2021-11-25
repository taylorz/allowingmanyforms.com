import styled from 'styled-components'

const StyledText = styled.span`
  text-decoration: none;
  font-size: ${({ theme }) => theme.text.size.body.regular}px;
  line-height: ${({ theme }) => theme.text.lineHeight.body.regular}px;
  font-weight: ${({ theme }) => theme.text.weight.body.regular};
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
