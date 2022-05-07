import React, {Component} from "react"

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const content = conteudos.map((conteudo)=> `O conteúdo é: ${conteudo.conteudo}
Status: ${conteudo.status}
Bloco: ${conteudo.bloco}`);

class Content extends Component {
    render() {
        return(
            <div className="conteudos">
                {conteudos.map((conteudo)=> (
                    <div key={conteudo.conteudo} className="card-conteudo">
                        <li>{`O conteúdo é: ${conteudo.conteudo}`}</li>
                        <li>{`Status: ${conteudo.status}`}</li>
                        <li>{`Bloco: ${conteudo.bloco}`}</li>
                        <br></br>
                    </div>
                ))}
            </div>
        );
    }
}

export default Content;
