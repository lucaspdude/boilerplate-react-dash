import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Main, Container } from './styles';

export default function DefaultLayout({ children }) {
    return (
        <Container>
            <Header />
            <Sidebar />
            <Main>{children}</Main>
        </Container>

    );
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired,
};
