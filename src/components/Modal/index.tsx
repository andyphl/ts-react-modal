import ReactDOM from "react-dom";
import StyledModal from "./Modal.styled";

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  open: boolean;
}

export const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  console.log("Modal rendered");
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onClick={onClose}
    >
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <button className="modal__button" onClick={onClose}>
          x
        </button>
        {children}
      </StyledModal>
    </div>,
    document.getElementById("portal") as Element
  );
};
