import React from 'react';

function FibonacciSeries() {
  const generateFibonacci = () => {
    let a = 0;
    let b = 1;
    const series = [a, b]; // Start with the first two numbers

    for (let i = 2; i <= 10; i++) { // Start from 2 because 0 and 1 are already added
      let temp = a + b;
      series.push(temp); // Add the new number to the series
      a = b;
      b = temp;
    }

    return series; // Return the series as an array
  };

  const series = generateFibonacci(); // Generate the Fibonacci series

  return (
    <div>
      <h1>Fibonacci Series</h1>

      {series.map((num, index) => (
        <div key={index}>{num}</div>
      ))}
    </div>
  );
}

export default FibonacciSeries;
