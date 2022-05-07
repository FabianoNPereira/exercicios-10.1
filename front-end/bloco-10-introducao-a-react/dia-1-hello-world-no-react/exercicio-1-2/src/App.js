
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['dormir', 'caminhar', 'estudar', 'tarefas de casa', 'estudar momentos sincrono trybe', 'exercicio trybe'];

function App() {
  return (
    <div className="compromissos">
      {compromissos.map((compromisso)=> (
        <li>{compromisso}</li>
      ))}
    </div>
  );
}

export default App;
