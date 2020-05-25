import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { listUsuariosSuccess, listUsuariosFailured, createUsuariosSuccess, createUsuariosFailured, updateUsuariosSuccess, updateUsuariosFailured, deleteUsuariosSuccess, deleteUsuariosFailured } from './actions';


export function* listUsuarios({ payload }) {
    try {
        const response = yield call(api.get, 'admin/usuarios', payload.data);
        yield put(listUsuariosSuccess(response.data))

    } catch (err) {
        console.log(err.response.data);
        yield put(listUsuariosFailured())
    }
}



export function* createUsuarios({ payload, resetForm }) {
    try {
        const response = yield call(api.post, 'admin/usuarios', payload.data);
        toast.success(response.data.message)
        yield put(createUsuariosSuccess(response.data.objeto));
        history.push('/dashboard/usuarios');

    } catch (err) {
        console.log(err.response.data)
        toast.error(err.response.data.erro)
        yield put(createUsuariosFailured());
    }
}



export function* updateUsuarios({ payload, resetForm }) {
    try {
        const { id, ...rest } = payload.data;
        const response = yield call(api.put, `admin/usuarios/${id}`, payload.data);
        toast.success(response.data.message)
        yield put(updateUsuariosSuccess(response.data.objeto))
    } catch (err) {
        console.log(err.response.data)
        toast.error(err.response.data.erro)
        yield put(updateUsuariosFailured());
    }
}


export function* deleteUsuarios({ payload }) {
    try {
        const { id, ...rest } = payload.data;
        const response = yield call(api.delete, `admin/usuarios/${id}`, payload.data);
        toast.success(response.data.mensagem);
        yield put(deleteUsuariosSuccess(response.data));


    } catch (err) {
        console.log(err.response.data)
        toast.error(err.response.data.erro);
        yield put(deleteUsuariosFailured())
    }
}






export default all(
    [
        takeLatest('@usuarios/LIST_REQUEST', listUsuarios),
        takeLatest('@usuarios/CREATE_REQUEST', createUsuarios),
        takeLatest('@usuarios/UPDATE_REQUEST', updateUsuarios),
        takeLatest('@usuarios/DELETE_REQUEST', deleteUsuarios),
    ]
);
