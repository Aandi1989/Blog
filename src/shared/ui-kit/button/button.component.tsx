import { ButtonType } from "./button.types";
import * as Styled from "./button.styles";

const Button: React.FC<ButtonType> = ({ name, onClick }) => {
  return <Styled.Button onClick={onClick}>{name}</Styled.Button>;
};

export default Button;
