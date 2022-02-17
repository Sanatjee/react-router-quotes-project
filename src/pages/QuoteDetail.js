import React, { Fragment } from "react";

import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const params = useParams();

  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <h1>QuoteDetail {params.quoteId}</h1>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
