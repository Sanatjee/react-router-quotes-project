import { useEffect } from "react";


import useHttp from '../hooks/use-http';
import { getAllQuotes } from "../lib/api";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";



const AllQuotes = () => {

  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest])

  if (status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if (status === 'error') {
    return <div className="centered focused">
      <p>{error}</p>
    </div>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return (
    <div>
      <h1>AllQuotes</h1>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
};

export default AllQuotes;
