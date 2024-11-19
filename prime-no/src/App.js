import logo from './logo.svg';
import './App.css';

function App() {
  const isPrime = (n) => {
    if (n < 2) {
      return "The given number is not prime number";
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return "The given number is not prime number";
      }
    }
    return "The given given number is prime number ";
  }
  const result = isPrime(765);
  return (
    <>
      {result}
    </>
  )
}

export default App;
