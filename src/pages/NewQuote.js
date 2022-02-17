import { useHistory } from "react-router-dom";
import React from "react";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (QuoteData) => {
    console.log("This is a test");
    history.push("/quotes");
  };
  return (
    <div>
      <h1>NewQuote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;
