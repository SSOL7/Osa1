
import './App.css';
import { useState, useEffect } from 'react';
import Quotes from './lib/quotes.json';
import Votingcard from './Votingcard';

function App() {
  let [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(Quotes);
    console.log(Quotes);
  }, []);

  function incrementVoteCount(quoteId) {
    quotes = quotes.map((quote) => {
      if (quote._id === quoteId) {
        quote.votes = quote.votes + 1;
      }
      return quote;
    });
    setQuotes(quotes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seoul</h1>
        {quotes.map((quote, index) => {
          return (
            <Votingcard
              key={index}
              quote={quote}
              incrementVoteCount={(quoteId) => incrementVoteCount(quoteId)}
            />
          );
        })}
      </header>
    </div>
  )
}

export default App

