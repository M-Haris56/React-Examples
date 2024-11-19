import logo from './logo.svg';
import './App.css';

function App() {
  const addeven = () => {
    let number = 5;
    if (number % 2 === 0) {
      return "The Number is Even";
    } else {
      return "The Number is Even";
    }
  }
  return (
    <>
      <div>{addeven()}</div>
    </>
  );
}

export default App;
