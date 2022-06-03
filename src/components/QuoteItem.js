import React from 'react';

const QuoteItem = ({ quote }) => {
    return (
        <li className="quote-item">
      <q>{quote.quote}</q>
      <b>- {quote.author}</b>
    </li>
    );
};

export default QuoteItem;