export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function signInSucess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: { token, user },
    };
}

export function signUpRequest(name, email, password) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, password },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURED',
    };
}

export function signOut() {
    return {
        type: '@auth/SIGNOUT',
    };
}



// Reset password
export function resetRequest(data) {
  return {
      type: '@auth/RESET_REQUEST',
      payload: { data },
  };
}

export function resetSucess(token) {
  return {
      type: '@auth/RESET_SUCCESS',
      payload: { token },
  };
}
export function resetFailure() {
  return {
      type: '@auth/RESET_FAILURED',
  };
}
