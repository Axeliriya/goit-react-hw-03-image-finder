import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  handleOverlayClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={e => this.handleOverlayClose(e)}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
