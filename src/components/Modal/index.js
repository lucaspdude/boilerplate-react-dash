import React from 'react';
import { Modal } from './styles';

export default function ModalDefault({show, children, title, handleClose, handleAction}){

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  

  return (
    <>
      <Modal className={showHideClassName} >
        <section className="modal-main" >
          <div className="d-flex flex-row justify-content-between align-items-baseline modal-header shadow-sm">
            <h2 className="modal-title">{title}</h2>
            <button className="btn-close-modal" onClick={handleClose}>Fechar</button>
          </div>
          
          <div className="modal-content">
            {children}
          </div>
            

        </section>
        
      </Modal>
    </>
  );
}
