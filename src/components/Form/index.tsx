
import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss';
import ITarefa from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Form({ setTarefas } : Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4() // criando ID com pacote externo
                }
            ]
        );
        setTarefa('');
        setTempo('00:00');
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                Adicione um novo estudo
            </label>
            <input 
            type="text" 
            name="tarefa" 
            value={tarefa} 
            onChange={event => setTarefa(event.target.value)} 
            id="tarefa" 
            placeholder="O que você quer estudar?" 
            required
            />
        </div>

        <div className={style.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input 
            type="time" 
            step="1" 
            name="tempo" 
            id="tempo" 
            value={tempo} 
            onChange={event => setTempo(event.target.value)} 
            min="00:00:00" 
            max="01:30:00" 
            required/>
        </div>

        <Button type='submit'>
            Adicionar
        </Button>
    </form>
    )
}