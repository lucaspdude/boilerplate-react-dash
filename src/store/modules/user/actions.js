export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
}

export function updateProfileSucess(profile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCESS',
        payload: { profile },
    };
}

export function updateProfileFailured() {
    return {
        type: '@user/UPDATE_PROFILE_FAILURED',
    };
}



export function updateImageRequest(data) {
  return {
      type: '@user/UPDATE_IMAGE_REQUEST',
      payload: { data },
  };
}

export function updateImageSuccess(data) {
  return {
      type: '@user/UPDATE_IMAGE_SUCCESS',
      payload: { data },
  };
}

export function updateImageFailured() {
  return {
      type: '@user/UPDATE_IMAGE_FAILURED',
  };
}

