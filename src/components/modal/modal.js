import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const modalRoot = document.querySelector('#modal-root');

export default function ModalEdition({ showModal, onClose, children }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // return (
  //   <Modal
  //     show={showModal}
  //     onHide={() => onClose()}
  //     size="lg"
  //     aria-labelledby="contained-modal-title-vcenter"
  //     centered
  //     onClick={handleBackdropClick}
  //   >
  //     <Modal.Header closeButton>
  //       <Modal.Title id="contained-modal-title-vcenter">
  //         Edite Contact
  //       </Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>{children}</Modal.Body>
  //     <Modal.Footer>
  //       <Button size="lg" onClick={onClose}>
  //         Close
  //       </Button>
  //     </Modal.Footer>
  //   </Modal>
  // );

  return createPortal(
    <Modal
      show={showModal}
      onHide={() => onClose()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={handleBackdropClick}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edite Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button size="lg" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>,

    // <div className={styles.backdrop} onClick={handleBackdropClick}>
    //   <div className={styles.content}>{children}</div>
    // </div>,
    modalRoot,
  );
}
