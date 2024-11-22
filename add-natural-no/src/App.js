import logo from './logo.svg';
import './App.css';

function App() {
  const natural = () => {
    let number = prompt("Enter a positive integer");
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  const result = natural();
  return (
    <>
      {result}
    </>
  );
}

export default App;
