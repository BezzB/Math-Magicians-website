import React from 'react';
import Calculator from './components/Caclulator';
import QuoteDisplay from './components/Quotes';
import './components/QuotesDisplay.css';

function App() {
  return (
    <div className="homecontainer">
      <h1>Calculator</h1>
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}

export default App;