import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./Item";
import ITarefa from "../../types/tarefa";
//Usando uma FUNCTION para criar componente

interface Props{
    tarefas: ITarefa[],
    //Tipando uma função
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
export default function List({tarefas, selecionaTarefa}: Props){
    
    return(
        <div className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            {tarefas.map((item) => (
                <Item
                selecionaTarefa={selecionaTarefa} 
                key={item.id}
                {...item} // Precisa ter cuidado quando usado com muitos dados

                    // tarefa={item.tarefa}
                    // tempo={item.tempo}
                />
            ))}
        </div>
    )
}
