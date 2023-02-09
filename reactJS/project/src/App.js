import logo from './logo.svg';
import './App.css';
import Login from './components/login/TelaOne';
import Cadastro from './components/cadastro/TelaCadastro';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>

      <Login/>
      <ToastContainer />

    </div>
  );
}

export default App;


