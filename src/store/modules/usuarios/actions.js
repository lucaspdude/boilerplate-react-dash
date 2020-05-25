//MODALS

export function openModalEdicaoRequest(){
    return {
        type: '@usuarios/OPEN_MODAL_EDICAO_REQUEST',
        payload: {},
    }
}
export function closeModalEdicaoRequest(){
    return {
        type: '@usuarios/CLOSE_MODAL_EDICAO_REQUEST',
        payload: {},
    }
}


export function openModalCriacaoRequest(){
    return {
        type: '@usuarios/OPEN_MODAL_CRIACAO_REQUEST',
        payload: {},
    }
}
export function closeModalCriacaoRequest(){
    return {
        type: '@usuarios/CLOSE_MODAL_CRIACAO_REQUEST',
        payload: {},
    }
}






// LIST
export function listUsuariosRequest() {
    return {
        type: '@usuarios/LIST_REQUEST',
        payload: {},
    };
}

export function listUsuariosSuccess(data) {
    return {
        type: '@usuarios/LIST_SUCCESS',
        payload: { data },
    };
}

export function listUsuariosFailured() {
    return {
        type: '@usuarios/LIST_FAILURED',
    };
}

// CREATE
export function createUsuariosRequest(data) {
    return {
        type: '@usuarios/CREATE_REQUEST',
        payload: { data },
    };
}

export function createUsuariosSuccess(data) {
    return {
        type: '@usuarios/CREATE_SUCCESS',
        payload: { data },
    };
}

export function createUsuariosFailured() {
    return {
        type: '@usuarios/CREATE_FAILURED',
    };
}


// UPDATE
export function updateUsuariosRequest(data) {
    return {
        type: '@usuarios/UPDATE_REQUEST',
        payload: { data },
    };
}

export function updateUsuariosSuccess(data) {
    return {
        type: '@usuarios/UPDATE_SUCCESS',
        payload: { data },
    };
}

export function updateUsuariosFailured() {
    return {
        type: '@usuarios/UPDATE_FAILURED',
    };
}

// DELETE
export function deleteUsuariosRequest(data) {
    return {
        type: '@usuarios/DELETE_REQUEST',
        payload: { data },
    };
}

export function deleteUsuariosSuccess(data) {
    return {
        type: '@usuarios/DELETE_SUCCESS',
        payload: { data },
    };
}

export function deleteUsuariosFailured() {
    return {
        type: '@usuarios/DELETE_FAILURED',
    };
}
