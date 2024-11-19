import logo from './logo.svg';
import './App.css';

function App() {

  const AllPrime = () => {

    let startNum = 10;
    let lastNum = 100;
    let prime = [];

    for (let i = startNum; i <= lastNum; i++) {
      if (i > 2) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {

          if (i % j == 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          prime.push(i);
        }
      }
    }
    return prime;

  }
  const result = AllPrime();
  return (
    <>
      {result.join(', ')}
    </>
  );
}

export default App;
