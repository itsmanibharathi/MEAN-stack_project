// src/App.js
import React, { useEffect, useState } from 'react';
import { getCount, incrementCount } from './CountService';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getCount().then((data) => {
      if (data) {
        setCount(data.count);
      } else {
        setCount(1); // Set initial value as 1
      }
    });
  }, []);

  const handleIncrement = async () => {
    try {
      const data = await incrementCount();
      setCount(data.count);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      
      <h1>React App</h1>
      <h3>Count Increment App</h3>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
