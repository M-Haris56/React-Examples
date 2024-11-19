import logo from './logo.svg';
import './App.css';

function App() {
  let num1 = 4;
  let num2 = -5;
  let num3 = 10;

  const largest = Math.max(num1, num2, num3);
  return (
    <>
      The Largest number is  {largest}
    </>
  )
}

export default App;
