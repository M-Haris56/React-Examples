import logo from './logo.svg';
import './App.css';

function App() {
  const Armstrong = () => {
    let number = prompt("Enter a Number");
    let temp = number;
    let sum = 0;
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** 3;
      temp = Math.floor(temp / 10);
    }
    if (sum === number) {
      return "The number is an Armstrong Number";
    } else {
      return "The number is not an Armstrong Number";
    }

  }
  const result = Armstrong();
  return (
    <>
      {result}
    </>
  );
}

export default App;
