import React from 'react';
import quotes from "../quotes.json"
import QuoteItem from "./components/QuoteItem"

const Quote = () => {
    return (
        <div>

        <ul>
        {quotes.map((quote) => (
          <QuoteItem quote={quote} key={quote.quote} />
        ))}
      </ul>
            
        </div>
    );
};

export default Quote;