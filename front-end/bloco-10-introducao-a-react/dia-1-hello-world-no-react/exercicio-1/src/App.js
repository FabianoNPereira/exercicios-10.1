
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['dormir', 'caminhar', 'estudar', 'tarefas de casa', 'estudar momentos sincrono trybe', 'exercicio trybe'];

const listaCompromissos = compromissos.map((compromissos)=> Task(compromissos)); 

function App() {
  return (Task(listaCompromissos));
}

export default App;
