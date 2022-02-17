import React, { Fragment, useEffect } from "react";

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api'
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const match = useRouteMatch();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if (status === 'error') {
    return <p className="centered">
      {error}
    </p>
  }

  if (!loadedQuote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      {/* <h1>QuoteDetail {params.quoteId}</h1> */}
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
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
