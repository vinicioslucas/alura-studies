import React from "react";
import style from '../Lista.module.scss';
import ITarefa from "../../../types/tarefa";

export default function Item({tarefa, tempo, selecionado, completado, id }: ITarefa){
    console.log('Item atual: ', {tarefa, tempo, selecionado, completado, id});
    return(
        <div className={style.item} >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </div>
    )
}