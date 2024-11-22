import logo from './logo.svg';
import './App.css';

function App() {
  const Interval = () => {
    let a = prompt("Enter a starting Number");
    let b = prompt("Enter a Last Number");

    for (let i = a; i <= b; i++) {
      let sum = 0;
      let temp = i;
      let noofDigits = i.toString().length;

      while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** noofDigits;
        temp = Math.floor(temp / 10);
      }
      if (sum === i) {
        document.write(i + "<br>");
      }
    }

  }
  const result = Interval();
  return (
    <>
      {result}
    </>
  );
}

export default App;
