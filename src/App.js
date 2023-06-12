import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";
import  {Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Route exact path='/signin' render={() => <h1>Sign In page</h1>}/>
      </Container>
    </div>
  );
}

export default App;