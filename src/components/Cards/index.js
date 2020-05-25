import React from 'react';
import { Card } from './styles';

export default function CardMini({data}){
  return (
    <>
      <Card
      className="card card__mini"
      >
        <img src={require(`../../assets/images/${data.icon}.png`)} />
        <div>
          <h3>{data.numero}</h3>
          <span>{data.titulo}</span>
        </div>
      </Card>
    </>
  );
}
