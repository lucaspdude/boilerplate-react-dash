import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Logo } from './styles';
import logo from '~/assets/images/logo_ketchapp_branca.png';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container className="bg-red-ketchapp sticky-top  w-100 p-3 pl-5 pr-5  d-flex flex-row justify-content-between align-items-center shadow-sm">
            <div className="logo p-3 ">
                <Link to="/dashboard">
                    <Logo src={logo} className="img-fluid logo" />
                </Link>
            </div>
            <div><h1>PAINEL ADMINISTRADOR</h1></div>
            <div className="actions">
                <button className="btn btn-danger btn-outline" onClick={handleLogout}>Sair</button>
            </div>
        </Container>



        // <Container>
        //     <Content>
        //         <nav>
        //             <Link to="/dashboard">
        //                 <img src={Logo} alt="GoBarber" />
        //             </Link>
        //             <Link to="/dashboard">DASHBOARD</Link>
        //         </nav>

        //         <aside>
        //             <Notification />
        //             <Profile>
        //                 <div>
        //                     <strong>{profile.estabelecimento}</strong>
        //                     <Link to="/profile">Meu Perfil</Link>
        //                 </div>
        //                 <UserLogo />

        //             </Profile>
        //         </aside>
        //     </Content>
        // </Container>



    );
}
