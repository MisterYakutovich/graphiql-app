import  { useState } from 'react';

const Main = () => {
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [result, setResult] = useState('');

  const executeQuery = async () => {
    try {
      const response = await fetch('YOUR_GRAPHQL_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      });
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(JSON.stringify(error, null, 2));
    }
  };

  return (
    <div>
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
      <textarea value={variables} onChange={(e) => setVariables(e.target.value)} />
      <button onClick={executeQuery}>Execute</button>
      <pre>{result}</pre>
    </div>
  );
};

export default Main;


/*import React from 'react';
import GraphiQL from "graphiql";
import 'graphiql/graphiql.min.css';

interface GraphiQLPlaygroundProps {
  endpoint: string;
}


  function Main({endpoint}:GraphiQLPlaygroundProps) {
    console.log(endpoint)
  const [query, setQuery] = React.useState('');
  const [variables, setVariables] = React.useState('');

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleVariableChange = (newVariables: string) => {
    setVariables(newVariables);
  };

  return (
    <div>
      <GraphiQL
        fetcher={graphQLFetcher.bind(null, endpoint)}
        query={query}
        variables={variables}
        onEditQuery={handleQueryChange}
        onEditVariables={handleVariableChange}
      />
      <textarea
        value={variables}
        onChange={(e) => handleVariableChange(e.target.value)}
        placeholder="Enter variables in JSON format"
      />
    </div>
  );
};

function graphQLFetcher(endpoint: string, graphQLParams: string) {
  // Здесь можно отправить запрос к серверу GraphQL с использованием graphQLParams
  return fetch(endpoint, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then((response) => response.json());
}

export default Main;*/