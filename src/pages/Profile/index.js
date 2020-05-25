import React, { useState } from 'react';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
// import {  } from '~/store/modules/auth/actions';
import {updateImageRequest} from '~/store/modules/user/actions'
import AvatarProfile from './AvatarInput';

import {UserLogo, UserCapa} from '~/components/Utilidades/usuarioImagens';

import { Container, ContainerSimples } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();


    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }


    return (

        <div className="row">
        <Container className="col-md-12">

            
            <Form initialData={profile} onSubmit={handleSubmit}>

                
                <Input name="email" type="email" placeholder="E-mail" />
                
                <Input type="hidden" name="id" />
                <Input type="text" name="nome" placeholder="Nome" />

                <Input
                    name="senha"
                    type="password"
                    placeholder="Nova Senha"
                />

                <Input
                    name="confirme-senha"
                    type="password"
                    placeholder="Confirmação de senha"
                />

                <button type="submit" className="btn btn-warning"> Atualizar Dados</button>
            </Form>

        </Container>
        </div>
    );
}
