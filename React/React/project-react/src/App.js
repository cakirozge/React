
import './App.css';
import Dashboard from './Dashboard';
import { Container } from 'semantic-ui-react'
import Navi from './Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className='main'>
        <Dashboard/>
      </Container>   
    </div>
  );
}

export default App;
