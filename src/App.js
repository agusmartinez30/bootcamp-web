import './App.css';
import Datos from './Datos'



 /*  Creamos un modulo */

const Description = () => {
  return <h2>Esta es una descripcion</h2>
}

const App = () => {
  return (
    <div className="App">
     {/*  utilizamos los modulos creados */}
     <Datos nombre='Juan' age={20 + 50} />
     <Datos nombre='Lucas' age='25' />
    </div>
  );
}

export default App;
