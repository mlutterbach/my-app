import './App.css';

import Hello from './Hello'

const App = () => {
  return (
    <div className="App">
      <Hello name="Marcos" age={31}/>
      <Hello name="Angela"/>
      <Hello name="Julio"/>
      <Hello name="Pedro" age={33}/>
      <Hello name="Mariana" age={30}/>
    </div>
  );
}

export default App;
