// import React from "react";

import { useEffect, useState } from "react";
import { fetchRandomQuoteAPI } from "../api/api";

function Quote() {
  const [quotes, setQuotes] = useState({ quote: "", author: "" });
  // const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchQuotes();
  }, []);
  const fetchQuotes = async () => {
    const result = await fetchRandomQuoteAPI();
    const data = result.quotes;
    const randomIndx = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndx];
    setQuotes({ quote: randomQuote.quote, author: randomQuote.author });
    // setAuthor(randomQuote.author);
    setIsLoading(false);
  };
  const handleQuote = () => {
    fetchQuotes();
  };
  return (
    <div>
      {/* {console.log("Render state:", quotes,  isLoading)} */}
      {isLoading ? (
        <p className="text-success">Loading....</p>
      ) : (
        <div>
          <span className="quote">{quotes.quote}</span>
          <div className="footer">
            <button onClick={handleQuote} className="btn btn-light">
              <i className="fas fa-sync"></i>
            </button>
            <div className="author">
              <span className="line"></span>&nbsp;
              <span>{quotes.author}-</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quote;
