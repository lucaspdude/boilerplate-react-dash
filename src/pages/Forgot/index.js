import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import {resetRequest} from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo_ketchapp_branca.png';

import { Container, Logo, ImageBG, Links } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail no formato correto')
        .required('E-mail obrigatorio'),
});

export default function Forgot() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const token = useSelector(state =>  state.auth.token);

    console.log(token)

    function handleSubmit(data) {
        dispatch(resetRequest(data));
    }

    return (
        <>
        <Container className="col-12 col-md-6">
            <Logo src={logo} alt="Ketchapp" className="logo" />

            <Form schema={schema} onSubmit={handleSubmit} className="frm__signIn">

                {
                  !token &&
                  <>
                    <h3>Insira o seu e-mail de cadastro abaixo <br /> para recuperar a sua senha</h3>
                    <Input name="email" type="email" placeholder="seu@email" />
                    <Links className="d-flex flex-column align-items-center">
                      <button type="" className="btn btn-warning">
                          {loading ? 'Carregando...' : 'FAZER LOGIN'}
                      </button>

                      <Link to="/register">Quero me cadastrar</Link>
                    </Links>
                  </>

                }
                {
                  token &&
                  <>
                    <h3>Sua senha foi enviada para <br /> o e-mail cadastrado</h3>
                      <Links className="d-flex flex-column align-items-center">
                        <Link to="/" className="btn btn-warning">{loading ? 'Carregando...' : 'FAZER LOGIN'}</Link>
                        <Link to="/">Voltar para LOGIN</Link>
                        <Link to="/register">Quero me cadastrar</Link>
                      </Links>
                  </>
                }




            </Form>
        </Container>
        <ImageBG className="col-12 col-md-6"></ImageBG>
        </>
    );
}
