import logo from './logo.svg';
import './App.css';
import {LoginForm} from './LoginForm';
import {Navbar} from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
