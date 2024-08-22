import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./Item";
import ITarefa from "../../types/tarefa";
//Usando uma FUNCTION para criar componente


export default function List({tarefas}: {tarefas: ITarefa[]}){
    
    return(
        <div className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            {tarefas.map((item, index) => (
                <Item 
                key={index}
                {...item} // Precisa ter cuidado quando usado com muitos dados

                    // tarefa={item.tarefa}
                    // tempo={item.tempo}
                />
            ))}
        </div>
    )
}
