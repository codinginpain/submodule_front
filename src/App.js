import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Counter from './components/Counter'

// Parent Component (Root Component)
// stateless component (functional component)
function App() {
  return (
    <div className="App">
      <Hello name="Kee!" />
      <Counter />
    </div>
  );
}

export default App;
