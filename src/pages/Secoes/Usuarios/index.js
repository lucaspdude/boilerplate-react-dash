import React, { useState, useEffect } from 'react';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';
import { Container, ContainerSimples } from './styles';
import { listUsuariosRequest, openModalCriacaoRequest, closeModalCriacaoRequest } from '~/store/modules/usuarios/actions';

import Modal from 'react-bootstrap/Modal';


import Usuario from './componentes/usuario';
import CadastroUsuario from './componentes/cadastro';
import { Link } from 'react-router-dom';

export default function Usuarios() {
  const dispatch = useDispatch();
  const userAction = useSelector(state => state.usuarios.action);
  const [modalCadastro, setModalCadastro] = useState(false);
  const [page, setPage] = useState(1);


  const [usuarios, setUsuarios] = useState([]);
  const [links, setLinks] = useState({});
  const [meta, setMeta] = useState([]);

  useEffect(() => {
    
    api.get(`admin/usuarios?page=${page}`)
      .then(response => {
        setUsuarios(response.data.data);
        setLinks(response.data.links);
        setMeta(response.data.meta)
      })
      .catch(error=> {
        console.log(error)
      })


  }, [userAction, page]);


  function handlePage(data){
    switch (data.action) {
      case 'back': {
          setPage(page-1)
          console.log(page)
        break;
      }
      case 'next': {
        setPage(page+1)
        console.log(page)
      }

      default:
        break;
    }
  }
    

  return (


    <div className="row ">

      
      <ContainerSimples className="col-md-12 " >
        <h1>Página de Usuários</h1>

        <button className="btn btn-black" onClick={() => setModalCadastro(true)} >Cadastrar Novo Usuário</button>

        <Modal
              size="lg"
              show={modalCadastro}
              onHide={() => setModalCadastro(false)}
              aria-labelledby="example-modal-sizes-title-lg"
          >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Edição de Usuários
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CadastroUsuario />
              </Modal.Body>
          </Modal>
        
      </ContainerSimples>

      <ContainerSimples className="col-md-12 card card__mini mb-3" >
        <table className="table table-hover table-small">
          <thead>
            <tr>
              <td colSpan="3">
                <button className="btn btn-extra-small btn-page" onClick={() => handlePage({"action": "back"})}>Anterior</button>
                <button className="btn btn-extra-small btn-page" onClick={() => handlePage({"action": "next"})}>Próxima</button>
                {/* <button className="btn btn-extra-small btn-page" onClick={() => handlePage({"action": "last"})}>Last</button> */}
              </td>
            </tr>
            <tr>
              <td>Usuário</td>
              <td>Email</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map(usuario => {
                return (
                  <Usuario usuario={usuario} key={usuario.id} />
                )
              })
            }
          </tbody>
        </table>
      </ContainerSimples>
    </div>
  );
}
