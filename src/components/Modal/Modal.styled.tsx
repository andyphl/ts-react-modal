import styled from "styled-components";

const StyledModal = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 0 10px #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    width: 90vw;
  }

  .modal__button {
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    color: #fff;
    background-color: #ccc;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.5s ease-in;
    position: absolute;
    top: 1rem;
    right: 1rem;

    &:hover {
      transform: scale(1.1);
    }
  }

  .title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export default StyledModal;
