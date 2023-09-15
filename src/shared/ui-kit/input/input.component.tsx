import * as Styled from "./input.styles";
import { InputProps } from "./input.types";

const Input: React.FC<InputProps> = ({ children, ...props }) => {
  return <Styled.Input {...props}>{children}</Styled.Input>;
};

export default Input;
