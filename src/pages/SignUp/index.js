import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo_ketchapp_branca.png';

import { Container, Logo, ImageBG, Links } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome Obrigatorio'),
    email: Yup.string()
        .email('Insira um e-mail no formato correto')
        .required('E-mail obrigatorio'),
    password: Yup.string()
        .min(6, 'A senha deve ter no minimo 6 caracteres')
        .required('Senha Obrigatoria'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit(data) {
        const { name, email, password } = data;
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
        <Container className="col-12 col-md-6">
            <Logo src={logo} alt="Ketchapp" className="logo" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome Completo" autoComplete="off" />
                <Input name="email" type="email" placeholder="you@email.com" autoComplete="off" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua Senha"
                    autoComplete="off"
                />

                <button className="btn btn-warning" type="submit">Criar Conta</button>
                <Links>
                    <Link to="/">Já tenho Login</Link>
                </Links>
            </Form>
        </Container>
        <ImageBG className="col-12 col-md-6"></ImageBG>
        </>
    );
}
