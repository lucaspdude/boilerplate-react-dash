import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Logo } from './styles';
import loadingGif from '~/assets/images/loading.gif';

import { signOut } from '~/store/modules/auth/actions';

export default function Loading() {

    return (
        <div className="loading-overlay">
            <div className="loading-content d-flex flex-column align-items-center justify-content-center">
                <img src={loadingGif} />
            </div>

        </div>





    );
}
