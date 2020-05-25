import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarContent } from './styles';

export default function Sidebar(){
    return (
        <>
            <SidebarContent>
                <Link to="/dashboard" >Dashboard</Link>
                <Link to="/dashboard/usuarios" >Usuários</Link>
                <Link to="/dashboard/profile" >Meus dados</Link>
            </SidebarContent>
        </>
    );
}
