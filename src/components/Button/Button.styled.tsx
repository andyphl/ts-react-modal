import styled from "styled-components";

const StyledButton = styled.button`
  background-color: cyan;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 0 10px #838383;
  cursor: pointer;

  &:hover {
    background-color: #4eb4b4;
  }
`;

export default StyledButton;
