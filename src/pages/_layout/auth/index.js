import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import '../styles.scss';


export default function AuthLayout({ children }) {
    return (
        <Container className="container-fluid">
            <div className="row h-100">
                {children}
            </div>
        </Container>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
