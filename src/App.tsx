import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "./components";

const Test = memo(styled.p`
  padding-top: 1rem;
`);

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const clickHandler = useCallback(() => {
    console.log("click");
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="app">
        <Button clickHandler={clickHandler}>Open Modal</Button>
        <Test>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          tempora? Neque, doloremque sunt officia magni temporibus inventore
          vero odit tenetur illo qui, ullam animi tempora? Minus aut magnam ipsa
          itaque perspiciatis a id placeat nostrum nobis consectetur, error
          soluta fuga dolores atque adipisci! Harum pariatur fugit saepe facilis
          impedit cupiditate hic nam modi excepturi autem! Tenetur voluptatibus
          repudiandae architecto, porro corporis quo ut corrupti vitae dolores
          laborum, repellendus eum. Iure nisi, incidunt inventore totam dolore
          atque? Illum dolore deleniti architecto quam dolorem explicabo
          dignissimos soluta eligendi laborum autem sit consequuntur hic
          consequatur deserunt, itaque sed rem. Iure soluta sunt ut.
        </Test>
      </div>
      <Modal open={open} onClose={clickHandler}>
        <h2 className="title">Hello</h2>
        <p>this is a modal</p>
        <img src="https://picsum.photos/id/684/600/400" alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          velit earum laborum nam sunt labore reprehenderit voluptatibus,
          tempora nisi quaerat?
        </p>
      </Modal>
    </>
  );
};

export default App;
