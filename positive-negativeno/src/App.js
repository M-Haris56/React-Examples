import logo from './logo.svg';
import './App.css';

const App = () => {
  let Number = 0;
  const CheckNo = () => {
    if (Number > 0) {
      return "Number is Positive";
    } else if (Number < 0) {
      return "The Number is Negative";
    } else {
      return "The Number is Zero or NaN";
    }
  }

  return (
    <>
      {CheckNo()}
    </>
  )

}

export default App;
