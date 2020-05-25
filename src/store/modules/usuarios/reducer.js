import produce from 'immer';

const INICIAL_STATE = {
    usuarios: {},
    action: null,
    loading: false,
    modalEdicao: false,
    modalCriacao: false,

};

export default function usuarios(state = INICIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@usuarios/OPEN_MODAL_EDICAO_REQUEST': {
                draft.modalEdicao = true;
                break;
            }

            
            case '@usuarios/CLOSE_MODAL_EDICAO_REQUEST': {
                draft.modalEdicao = false;
                break;
            }

            case '@usuarios/OPEN_MODAL_CRIACAO_REQUEST': {
                draft.modalCriacao = true;
                break;
            }

            
            case '@usuarios/CLOSE_MODAL_CRIACAO_REQUEST': {
                draft.modalCriacao = false;
                break;
            }



            // LISTA
            case '@usuarios/LIST_REQUEST': {
                // draft.usuarios = null;
                draft.loading = true;

                break;
            }

            case '@usuarios/LIST_SUCCESS': {
                draft.usuarios = action.payload.data.data;
                draft.loading = false;

                break;
            }

            case '@usuarios/LIST_FAILURED': {
                draft.usuarios = action.payload.usuarios;
                draft.loading = false;

                break;
            }


            // CREATE
            case '@usuarios/CREATE_REQUEST': {
                draft.usuarios = action.payload.usuarios;
                break;
            }
            case '@usuarios/CREATE_SUCESS': {
                draft.usuarios = action.payload.data.usuario;
                
                break;
            }
            case '@usuarios/CREATE_FAILURED': {
                draft.usuarios = null;
                break;
            }

            // UPDATE
            case '@usuarios/UPDATE_REQUEST': {
                draft.usuarios = action.payload.usuarios;
                break;
            }
            case '@usuarios/UPDATE_SUCCESS': {
                draft.usuarios = action.payload.data.usuario;
                draft.modalEdicao = false;
                break;
            }
            case '@usuarios/UPDATE_FAILURED': {
                draft.usuarios = null;
                break;
            }

            // DELETE
            case '@usuarios/DELETE_REQUEST': {
                draft.action = action.payload;
                break;
            }
            case '@usuarios/DELETE_SUCCESS': {
                // draft.usuarios = action.payload.data;
                draft.action = action.payload
                break;
            }
            case '@usuarios/DELETE_FAILURED': {
                draft.usuarios = null;
                console.log("FAIL")

                break;
            }



            default:
        }
    });
}
