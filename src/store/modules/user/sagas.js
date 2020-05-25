import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSucess, updateProfileFailured, updateImageSuccess, updateImageFailured } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { id, ...rest } = payload.data;
        console.log(payload.data);
        const response = yield call(api.put, `admin/usuarios/${id}`, payload.data);
        toast.success(response.data.message);

        yield put(updateProfileSucess(response.data));
    } catch (err) {
        console.log(err.response)
        const errorMessage = err.response.data.erro;
        toast.error(errorMessage);
        yield put(updateProfileFailured());
    }
}



export function* updateImagem({payload}){
  try {

    const {estabelecimento, ...rest} = payload.data;
    const response = yield call(api.post, `estabelecimentos/${estabelecimento}/imagem`, payload.data);
    toast.success(response.data.mensagem)
    console.log(response.data)
    yield put(updateImageSuccess(response.data))

  } catch (err) {
    console.log(err.response.data)
    const errorMessage = err.response.data.erro;
    toast.error(errorMessage);
    yield put(updateImageFailured());
  }
}






export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_IMAGE_REQUEST', updateImagem),

]);
