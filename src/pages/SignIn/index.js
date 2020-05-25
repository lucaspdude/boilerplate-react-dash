import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo_ketchapp_branca.png';

import { Container, Logo, ImageBG, Links } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail no formato correto')
        .required('E-mail obrigatorio'),
    password: Yup.string()
        .min(6, 'A senha deve ter no minimo 6 caracteres')
        .required('Senha Obrigatoria'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit(data) {
        const { email, password } = data;
        dispatch(signInRequest(email, password));
    }

    return (
        <>
        <Container className="col-md-10 offset-md-1">
            <Logo src={logo} alt="Ketchapp" className="logo" />
              <h1>PAINEL ADMIN</h1>
            <Form schema={schema} onSubmit={handleSubmit} className="frm__signIn">
                <Input name="email" type="email" placeholder="seu@email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua Senha"
                />

                <Links className="d-flex flex-column align-items-center">
                    <button type="submit" className="btn btn-warning">
                        {loading ? 'Carregando...' : 'Fazer Login'}
                    </button>
                    <Link to="/forgot">Esqueci minha senha</Link>
                    <Link to="/register">Quero me cadastrar</Link>
                </Links>

            </Form>
        </Container>
        </>
    );
}
