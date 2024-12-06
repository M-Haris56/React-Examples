import logo from './logo.svg';
import './App.css';

function App() {
  const hcf = () => {
    let a = 18;
    let b = 54;
    let smaller = a < b ? a : b;
    let gcd = 1;
    for (let i = smaller; i >= 1; i--) {
      if (a % i === 0 && b % i === 0) {
        gcd = i;
        break;
      }
    }
    return gcd;
  }
  const answer = hcf();
  return (
    <>
      <div>{answer}</div>
    </>
  );
}

export default App;
