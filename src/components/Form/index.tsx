
import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import ITarefa from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid';

class Form extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    // Tipo tipo de evento
    adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4() // criando ID com pacote externo
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: ""
        })
    }

    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text" name="tarefa" value={this.state.tarefa} onChange={event => this.setState({...this.state, tarefa: event.target.value})} id="tarefa" placeholder="O que você quer estudar?" required/>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" step="1" name="tempo" id="tempo" value={this.state.tempo} onChange={event => this.setState({...this.state, tempo: event.target.value})} min="00:00:00" max="01:30:00" required/>
                </div>

                <Button type='submit'>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;