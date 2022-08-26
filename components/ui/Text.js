import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledText = styled.span`
  text-decoration: none;
  font-family: ${({ theme }) => theme.text.family.regular};
  font-weight: ${({ theme }) => theme.text.weight.body.regular};
  font-size: ${(props) =>
    props.title
      ? props.theme.text.size.title.regular
      : props.theme.text.size.body.regular}px;
  line-height: ${(props) =>
    props.title
      ? props.theme.text.lineHeight.title.regular
      : props.theme.text.lineHeight.body.regular}px;
  color: #33333a;
`;

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
