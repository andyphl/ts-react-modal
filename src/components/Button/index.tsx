import { memo } from "react";
import StyledButton from "./Button.styled";

interface ButtonProps {
  clickHandler: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = memo(
  ({ clickHandler, children }) => {
    console.log("Button render");
    return <StyledButton onClick={clickHandler}>{children}</StyledButton>;
  }
);
