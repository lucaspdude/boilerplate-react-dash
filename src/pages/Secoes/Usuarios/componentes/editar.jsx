import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsuariosRequest } from '~/store/modules/usuarios/actions'


import axios from 'axios';

export default function EdicaoUsuarios({usuario}) {
  const dispatch = useDispatch();


  const [listaEstados, setListaEstados] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState([]);
  const [listaCidades, setListaCidades] = useState([]);


  const funcoes = [
    { "id": "Super Admin", "title": "Super Admin" },
    { "id": "Administrador", "title": "Administrador" },
    { "id": "Estabelecimento", "title": "Estabelecimento" },
    { "id": "Usuário", "title": "Usuário" },
  ]

  useEffect(() => {

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
      .then(response => {
        response.data.sort((a, b) => {
          return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
        })
        const estadosMap = response.data.map(estado => {
          const filtered = {}
          filtered['id'] = estado.sigla
          filtered['title'] = estado.nome
          return filtered
        })
        setListaEstados(estadosMap)
      })
      .catch(error => {
        console.log(error)
      })

    //Cidades

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
      .then(response => {
        response.data.sort((a, b) => {
          return a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0;
        })

        const cidadesMap = response.data.map(cidade => {
          const filtered = {}
          filtered['id'] = cidade.nome
          filtered['title'] = cidade.nome
          return filtered
        })
        setListaCidades(cidadesMap)



      })
      .catch(error => {
        console.log(error)
      })
  }, [estadoSelecionado])


  function handleSubmit(data) {
    dispatch(updateUsuariosRequest(data))
  }

  return (
    <>
<Form onSubmit={handleSubmit} initialData={usuario}>


<h3>Informações Básicas: </h3>



<div className="row">
<Input type="hidden" name="id" />
  <div className="col"><Input type="text" placeholder="Nome de Usuário" label="Nome" name="nome" /></div>
  <div className="col">
    <Input type="email" placeholder="E-mail" label="Email" name="email" />
  </div>
</div>
<div className="row">
  <div className="col">
    <Input type="password" placeholder="Senha" label="Senha" name="senha" />
  </div>
  <div className="col">
    <Input type="password" placeholder="Confirmação de Senha" label="Confirmação de senha" name="confirme-senha" />
  </div>
</div>

<hr />
<h3>Endereço: </h3>
<Input type="hidden" name="pais" value="Brasil" />

<div className="row">
  <div className="col-md-4">
    <Input type="text" placeholder="CEP" label="CEP" name="cep" />
  </div>

  <div className="col-md-8">
    <Input type="text" placeholder="Rua" label="Rua" name="rua" />
  </div>
</div>

<div className="row">
  <div className="col-md-4">
    <Input type="text" placeholder="Número" label="Número" name="numero" />
  </div>
  <div className="col-md-8">
    <Input type="text" placeholder="Bairro" label="Bairro" name="bairro" />
  </div>
</div>

<div className="row">
  <div className="col-md-4">
    <Select name="estado" options={listaEstados} placeholder="Selecione o estado" label="Estado" onChange={(e) => setEstadoSelecionado(e.target.value)} />
  </div>
  <div className="col-md-8">
    <Select name="cidade" options={listaCidades} placeholder="Selecione a cidade" label="Cidade" />
  </div>
</div>

<hr />
<h3>Informações adicionais: </h3>
<div className="row">
  <div className="col">
    <Select name="funcao" options={funcoes} placeholder="Selecione a função do usuário" label="Selecione a função do usuário" />
  </div>
  <div className="col">
    <Input type="date" placeholder="" label="Data de Nascimento" name="datanascimento" />
  </div>

</div>

<div className="row">
  <div className="col">
    <Input type="text" placeholder="" label="CPF" name="cpf" />
  </div>
  <div className="col">
    <Input type="tel" placeholder="" label="Telefone" name="telefone" />
  </div>

</div>

<div className="d-flex flex-row justify-content-end">
<button type="submit" className="btn btn-black justify-self-end">Atualizar</button>
</div>



</Form>    </>
  )
}
