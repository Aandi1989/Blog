import { ButtonProps } from "./button.types";
import * as Styled from "./button.styles";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default Button;
