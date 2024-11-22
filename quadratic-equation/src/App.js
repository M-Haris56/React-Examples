import logo from './logo.svg';
import './App.css';

function App() {
  let a = 1;
  let b = 1;
  let c = -1;

  let result = (-1 * b) + Math.sqrt(Math.pow(b, 2)) - (4 * a * c) / (2 * a);
  let result2 = (-1 * b) - Math.sqrt(Math.pow(b, 2)) - (4 * a * c) / (2 * a);
  return (
    <>
      <div>{result}</div>
      <div>{result2}</div>
    </>
  );
}

export default App;
