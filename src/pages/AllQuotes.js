import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "1",
    author: "sanat gawade",
    text: "This is it",
  },

  {
    id: "2",
    author: "alisha gawade",
    text: "Lets do it",
  },

  {
    id: "3",
    author: "Rujul S",
    text: "Zindagi maut na ban jaaye sambhalo yaaro",
  },

  {
    id: "4",
    author: "Mohit Tanna",
    text: "Chal na beta",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <h1>AllQuotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
