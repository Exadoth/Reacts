import 'bulma/css/bulma.css'
import './App.css';
import {Course} from './Course'
import Angular from './images/angular.jpg'
import Bootstrap5 from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import Kompleweb from './images/kompleweb.jpg'


function App() {
  
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>

        <div className="columns">
          <div className="column">
            <Course image={Angular} title="Başlık 1" description="Açıklama 1"/>
          </div>
        <div className="column">
            <Course image={Bootstrap5} title="Başlık 2" description="Açıklama 2"/>
        </div>
        <div className="column">
            <Course image={Ccsharp} title="Başlık 3" description="Açıklama 3"/>
        </div>
        <div className="column">
            <Course image={Kompleweb} title="Başlık 4" description="Açıklama 4"/>
        </div>
        </div>
          
        </section>
        
      </div>
    </div>
  );
}

export default App;
