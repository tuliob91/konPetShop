import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Header from './layout/header';
import Body from './layout/body';

function App() {

  const [email,setEmail] = useState('');

  // const handleEmail = (event) =>{
  //   setEmail(event.target.value);
  // };

  // const handleEnviarEmail = (event) => {
  //   event.preventDefault();
  //   console.log('Entrou aqui oia');
  // };

  return (
    <div>
      <Header/>
      <div className='body-part'><Body/></div>            
    </div>
  );
}

export default App;
