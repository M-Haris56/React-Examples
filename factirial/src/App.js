import logo from './logo.svg';
import './App.css';

function App() {
  const factorial = (n) => {
    let res = 1;
    if (n === 0) {
      return 0;
    }
    for (let i = 2; i <= n; i++) {
      res = res * i;
    }
    return res;
  }
  const facresult = factorial(7);
  return (
    <>
      {facresult}
    </>
  );
}

export default App;
