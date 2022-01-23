import logo from './logo.svg';
import './App.css';
import Profil from './Profil/Profil';
import image from './Profil/avatar.jpg'

function App() {
  const FullName= "Chourabi Oumaima"
  const Bio ="2020: Licences Fondamentale En Sciences Informatique"
  const Stage ="Dream Fm"
  const alertMe=(e)=>{
    e.preventDefault();
    alert(FullName)
  }
  return (
    <div className="App">
      
      <Profil FullName={FullName} Bio={Bio} Stage={Stage}>
        <img src={image} height={200}/>
      </Profil>

      <a href="/" onClick={alertMe}>
        Click me
      </a>
    
    </div>
  );
}

export default App;
