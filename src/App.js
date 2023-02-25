import logo from './logo.svg';
import './App.css';
import Nevbar from './components/Nevbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =() =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='#090c18';
      }else{
        setMode('light');
        document.body.style.backgroundColor ='white';
      }
  }
  return (
    <>
      <Nevbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextForm title = "Enter your Text here" mode={mode}/>
      </div>
    </>
  );
}

export default App;
