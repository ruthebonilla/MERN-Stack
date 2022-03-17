
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wordle from './components/Wordle'
import 

function App() {
  const [form, setForm] = useState("");

  return (
    <div className="App">
      <Wordle />
    </div>
  );
}

export default App;
