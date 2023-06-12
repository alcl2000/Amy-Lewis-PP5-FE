import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;