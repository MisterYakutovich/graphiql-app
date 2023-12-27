import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import "./Main.css"

interface SchemaType {
  // Определите тип схемы здесь
}
const Main: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [variables, setVariables] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null); // Определите тип ответа здесь
  const [apiUrl, setApiUrl] = useState<string>('');
  const [schema, setSchema] = useState<SchemaType | null>(null);

  const handleQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(event.target.value);
  };

  const handleVariablesChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setVariables(event.target.value);
  };

  const handleHeadersChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setHeaders(event.target.value);
  };

  const handleApiUrlChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setApiUrl(event.target.value);
  };

  /*const executeQuery = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...JSON.parse(headers),
      },
      body: JSON.stringify({
        query,
        variables: JSON.parse(variables),
      }),
    })
      .then((res: { json: () => any; }) => res.json())
      .then((data: React.SetStateAction<null>) => {
        setResponse(data);
      })
      .catch((error: any) => {
        console.error('Error executing query:', error);
      });
  };*/
 /* async function executeQuery_1() {
    let results = await fetch('https://countries.trevorblades.com/graphql', {
      method: 'POST',  
      headers: {
        "Content-Type": "application/json"
      },
    //  body: JSON.stringify({
      //  query,
     //   variables: JSON.parse(variables),
    //  }),
      body: JSON.stringify({
        query: `{
          countries {
            name
          }
        }`
      })
    })
    let characters = await results.json();
    console.log(characters.data)
  }
  executeQuery_1()*/
 
  async function executeQuery() {
    try {
      let results = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: query
        })
      });
      let data = await results.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    if (apiUrl) {
      const fetchSchema = async () => {
        try {
          let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              query: `
                {
                  __schema {
                    types {
                      name
                    }
                  }
                }
              `
            })
          });
          let data: SchemaType = await response.json();
          setSchema(data);
        } catch (error) {
          console.error('Error fetching schema:', error);
        }
      };
      fetchSchema();
    }
  }, [apiUrl]);
  return (
    <div className='wrapper-main'>
       <div className='wrapper-main_apiUrl'>
       <button onClick={executeQuery}>Execute</button>
        <input type="text" value={apiUrl} onChange={handleApiUrlChange} />      
      </div>
      <div className='wrapper-main_content'>
      <div className='wrapper-main_json'>
        {/* Display response here */}
        <pre>{JSON.stringify(response, null, 2)}</pre>     
      </div>
      <div className='wrapper-main_query_variables'>
      <div className='wrapper-main_query'>
        <textarea value={query} onChange={handleQueryChange} />
      </div>
      <div className='wrapper-main_variables'>
        <textarea value={variables} onChange={handleVariablesChange} />
      </div>
      <div className='wrapper-main_headers'>
        <textarea value={headers} onChange={handleHeadersChange} />
      </div>    
      </div>
     
     
      <div className='wrapper-main_documentation'>
        {/* Отображение документации только после успешной загрузки схемы */}
        {schema && (
          <pre>{JSON.stringify(schema, null, 2)}</pre>
        )}
      </div>
      </div>
    </div>
  );
};

export default Main;

/*import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Main: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  async function getCharacters() {
    let results = await fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
  
      headers: {
        "Content-Type": "application/json"
      },
  
      body: JSON.stringify({
        query: `{
          characters {
            results {
              name
            }
          }
        }`
      })
    })
    let characters = await results.json();
    console.log(characters.data)
  }
  
  getCharacters()

  return (
    <div>
      <div>
        <label>GraphQL Query:</label>
        <textarea value={query} onChange={handleQueryChange} />
      </div>
      <div>
        <button onClick={getCharacters}>Execute Query</button>
      </div>
      <div>
        <label>Response:</label>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default Main;*/


/*import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Main: React.FC = () => {
 
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleVariablesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVariables(event.target.value);
  };

  const handleHeadersChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeaders(event.target.value);
  };

  const handleApiEndpointChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiEndpoint(event.target.value);
  };

 /* const { isLoading, error, data, refetch } = useQuery('queryData', async () => {
    try {
     
     const url = `${apiEndpoint}?query=${encodeURIComponent(query)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...JSON.parse(headers),
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
     // console.error('Error fetching data:', error);
      throw error;
    }
  });*/
 
  //const handleExecuteQuery = () => {
   // refetch();
 // };
 /*const { isLoading, error, data, refetch } = useQuery(
  'repoData',
  () =>
    fetch(
      'https://api.github.com/repos/tannerlinsley/react-query'
    ).then((response) => response.json())
    
    
);
console.log(data)

if (isLoading) return <p>Загрузка...</p>;

if (error) return <p>Ошибка: {error.message}</p>;*/
/*const { isLoading, error, data, refetch } = useQuery(
  'queryData',
  async () => {
    try {
      const parsedHeaders = headers ? JSON.parse(headers) : {}; // Парсим заголовки
      const parsedVariables = variables ? JSON.parse(variables) : {}; // Парсим переменные

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...parsedHeaders, // Используем разобранные заголовки
        },
        body: JSON.stringify({
          query,
          variables: parsedVariables, // Используем разобранные переменные
        }),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
  {
    enabled: false,
  }
);
  return (
    <div>
      <div>
        <label>API Endpoint:</label>
        <input type="text" value={apiEndpoint} onChange={handleApiEndpointChange} />
      </div>
      <div>
        <label>Query:</label>
        <textarea value={query} onChange={handleQueryChange} />
      </div>
      <div>
        <label>Variables:</label>
        <textarea value={variables} onChange={handleVariablesChange} />
      </div>
      <div>
        <label>Headers:</label>
        <textarea value={headers} onChange={handleHeadersChange} />
      </div>
      <div>
      <button onClick={handleExecuteQuery}>Execute</button>
      </div>
      <div>
        <pre> <pre>{JSON.stringify(data, null, 2)}</pre></pre>
      </div>
    </div>
  );
};

export default Main;*/






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
