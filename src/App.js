import './App.css';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Repo } from './components/ListRepo/Repos';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Repo/>
      </div>
    </Router>
  );
}
export default App;
