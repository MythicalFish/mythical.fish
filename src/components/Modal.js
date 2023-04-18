import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "./icons/light/Times";

class Modal extends React.Component {
  handleKeyPress = ({ keyCode }) => {
    if (keyCode === 27) {
      this.props.closeFunc();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }
  render() {
    if (!this.props.isOpen) return null;
    const modalContainer = document.getElementById("modal");
    return ReactDOM.createPortal(
      <div className="modal">
        <ModalContent {...this.props} />
      </div>,
      modalContainer
    );
  }
}

class ModalContent extends React.Component {
  handleClickOutside = () => {
    this.props.closeFunc();
  };
  render() {
    return (
      <div className="modal-content">
        {this.props.children}
        <button className="modal-close" onClick={this.handleClickOutside}>
          <CloseIcon />
        </button>
      </div>
    );
  }
}

export default Modal;
