import React from "react";
import style from './Botao.module.scss';


// Usando CLASS para criar component JEITO ANTIGO 

class Button extends React.Component<{ type?: "button" | "submit" | "reset" | undefined; children?: React.ReactNode
}>{
    render(){
        const {type = "button", children} = this.props;
        return(
            <button type={type} className={style.botao}>{children}</button>
        )
    }
}

export default Button;