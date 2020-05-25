import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardMini from '../../components/Cards';
import { Cards } from './styles';

export default function Dashboard() {
    const profile = useSelector(state => state.user.profile);
    return (
        <>
        <div className="card">
            
            <h1>Painel Administrador Ketchapp</h1>
        </div>
        {/* <Cards className="row">
            <div className="col"><CardMini data={{numero:"98", titulo:"Pedidos", icon: "icon_waiter"}}  /></div>
            <div className="col"><CardMini data={{numero:"3.004,00", titulo:"Vendas", icon: "icon_money"}}  /></div>
            <div className="col"><CardMini data={{numero:"1540", titulo:"Clientes", icon: "icon_customer"}} /></div>
            <div className="col"><CardMini data={{numero:"4.3", titulo:"Avaliações", icon: "icon_star"}} /></div>
        </Cards>

        <Cards className="row">
            <div className="col">
                <div className="card">
                    <h3 className="title">RELATÓRIO - Produtos Mais Vendidos</h3>
                    <div className="card__data">
                        <ul>
                            <li>Batata Frita</li>
                            <li>Heineken 600ml</li>
                            <li>Coca Cola 600ml</li>
                            <li>Bolinho de Carne</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <h3 className="title">RELATÓRIO - Produtos Mais Vendidos</h3>
                    <div className="card__data">
                        <ul>
                            <li>Márcio Silva</li>
                            <li>Juliana Freitas</li>
                            <li>Julinho da Van</li>
                            <li>Dino Silva Sauro</li>
                        </ul>
                    </div>
                </div>
            </div>

        </Cards> */}


        </>

    );
}
