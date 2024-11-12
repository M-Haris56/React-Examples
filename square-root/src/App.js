import logo from './logo.svg';
import './App.css';

function App() {
  const num1 = 36;
  const num2 = -3;
  const num3 = "Hello";

  const res1 = Math.sqrt(num1);
  const res2 = Math.sqrt(num2);
  const res3 = Math.sqrt(num3);
  return (
    <>
      <p>The {num1} square root is {res1}</p>
      <p>The {num2} square root is {res2}</p>
      <p>The {num3} square root is {res3}</p>
    </>
  );
}

export default App;
