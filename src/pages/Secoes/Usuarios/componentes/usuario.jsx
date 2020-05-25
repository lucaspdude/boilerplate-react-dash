import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '~/services/history';


import Modal from 'react-bootstrap/Modal';



import { deleteUsuariosRequest} from '~/store/modules/usuarios/actions'

import EdicaoUsuarios from './editar';

export default function Usuario({ usuario }) {
  const dispatch = useDispatch();

  const [modalEdicaoShow, setModalEdicaoShow] = useState(false);
  const modalEdicaoState = useSelector(state => state.usuarios.modalEdicao);


  function handleDelete(data) {
    if(window.confirm("Tem certeza que deseja apagar este registro?")){
      dispatch(deleteUsuariosRequest(data))
    }


    
  }
  return (
    <>
      <tr >
        <td>{usuario.nome}</td>
        <td>{usuario.email}</td>
        <td>
          <button className="btn btn-success  btn-extra-small ml-1" >Ver</button>
          <button className="btn btn-warning btn-extra-small mr-1 " onClick={() => setModalEdicaoShow(true)} >Editar</button>

          <button className="btn btn-danger btn-extra-small ml-1" onClick={() => handleDelete(usuario)}>Excluir</button>
          <Modal
              size="lg"
              show={modalEdicaoShow}
              onHide={() => setModalEdicaoShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
          >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Edição de Usuários
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EdicaoUsuarios usuario={usuario}  />
              </Modal.Body>
            </Modal>

        </td>
      </tr>

      
      
    </>
  )
}
