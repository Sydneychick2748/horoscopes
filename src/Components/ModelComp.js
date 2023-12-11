
// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModelComp({closeModal,selectedButton}) {
  console.log(closeModal, "closeModel")
 

  
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
        <Modal.Header closeButton onClick={closeModal}>
  {/* Your header content here */}
</Modal.Header>

  
          <Modal.Body>
            <p>You Want To Learn About:  {selectedButton.sign}</p>
          </Modal.Body>
  
          <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close Modal</Button>

          
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

export default ModelComp;
