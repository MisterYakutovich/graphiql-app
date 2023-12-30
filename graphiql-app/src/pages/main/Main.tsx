import React, { useState, useEffect, useRef } from 'react';
import fetch from 'isomorphic-fetch';
import './Main.css';

interface SchemaType {
  data: {
    __schema: {
      types: Array<{
        name: string;
      }>;
    };
  };
}
const Main: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [variables, setVariables] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null); // Определите тип ответа здесь
  const [apiUrl, setApiUrl] = useState<string>('');
  const [schema, setSchema] = useState<SchemaType | null>(null);
  const [showDocumentation, setShowDocumentation] = useState<boolean>(false);

  const [showVariables, setShowVariables] = useState<boolean>(false);
  const [showHeaders, setShowHeaders] = useState<boolean>(false);

 // const [contentStyles, setContentStyles] = useState<string>('grid-template-columns: 50px 2fr 2fr');
  const contentRef = useRef<HTMLDivElement>(null);
  const documentationRef = useRef<HTMLDivElement>(null);
  const variablesRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);
  const toggleVariables = () => {
    setShowVariables(!showVariables);
    if (showVariables) {
      if (variablesRef.current) {
        variablesRef.current.style.display = 'none';
      }
    } else {
      if (variablesRef.current) {
        variablesRef.current.style.display = 'block';
      }
      // Скрыть блок с заголовками
      if (headersRef.current) {
        headersRef.current.style.display = 'none';
      }
    }
  };

  const toggleHeaders = () => {
    setShowHeaders(!showHeaders);
    if (showHeaders) {
      if (headersRef.current) {
        headersRef.current.style.display = 'none';
      }
    } else {
      if (headersRef.current) {
        headersRef.current.style.display = 'block';
      }
      // Скрыть блок с переменными
      if (variablesRef.current) {
        variablesRef.current.style.display = 'none';
      }
    }
  };
  const toggleDocumentation = () => {
    setShowDocumentation(!showDocumentation);

    if (showDocumentation) {
      // Скрыть блок .wrapper-main_documentation
      if (documentationRef.current) {
        documentationRef.current.style.display = 'none';
      }
      // Изменить стили блока .wrapper-main_content при скрытии
      if (contentRef.current) {
        contentRef.current.style.gridTemplateColumns = '50px 2fr 2fr';
      }
    } else {
      // Показать блок .wrapper-main_documentation
      if (documentationRef.current) {
        documentationRef.current.style.display = 'block';
      }
      // Изменить стили блока .wrapper-main_content при показе
      if (contentRef.current) {
        contentRef.current.style.gridTemplateColumns = '50px 2fr 2fr 2fr';
      }
    }
  };
  const handleQueryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  const handleVariablesChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setVariables(event.target.value);
  };

  const handleHeadersChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setHeaders(event.target.value);
  };

  const handleApiUrlChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setApiUrl(event.target.value);
  };

  /*async function executeQuery() {
    try {
      let results = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
        }),
      });
      let data = await results.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }*/
  const executeQuery = async () => {
    try {
      let headersObject: { [key: string]: string } = {};
      if (headers) {
        const headersArray = headers.split(';');
        headersArray.forEach(header => {
          const [key, value] = header.split(':');
          headersObject[key.trim()] = value.trim();
        });
      }
  
      let results = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headersObject,
        },
        body: JSON.stringify({
          query: query,
          variables: variables ? JSON.parse(variables) : undefined,
        }),
      });
  
      let data = await results.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (apiUrl) {
      const fetchSchema = async () => {
        try {
          let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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
              `,
            }),
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
console.log(response)
  return (
    <div className="wrapper-main">
      <div className="wrapper-main_apiUrl">
        <button onClick={executeQuery}>Execute</button>
        <input type="text" value={apiUrl} onChange={handleApiUrlChange} />
      </div>
      <div className="wrapper-main_content" ref={contentRef}>
        <div className='wrapper-main_content-slider'>
          <div className='content-slider' onClick={toggleDocumentation}>
          <button className='content-slider_documentation-button'>
          <svg
            height="1em"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>docs icon</title>
            <path
              d="M0.75 3C0.75 4.24264 1.75736 5.25 3 5.25H17.25M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H16.25C16.8023 0.75 17.25 1.19772 17.25 1.75V5.25M0.75 3V21C0.75 22.2426 1.75736 23.25 3 23.25H18.25C18.8023 23.25 19.25 22.8023 19.25 22.25V6.25C19.25 5.69771 18.8023 5.25 18.25 5.25H17.25"
              stroke="currentColor"
              stroke-width="1.5"
            ></path>
            <line
              x1="13"
              y1="11.75"
              x2="6"
              y2="11.75"
              stroke="currentColor"
              stroke-width="1.5"
            ></line>
          </svg>
          </button>
          </div>        
        </div>     
        {showDocumentation && <div className="wrapper-main_documentation" ref={documentationRef}> {schema?.data.__schema.types.map((i) => (
            <pre key={i.name}>{i.name}</pre>
          ))}</div>}
                 
        <div className="wrapper-main_sections">
          <div className="sections-query">
            <textarea className='sections-qiery_textarea' value={query} onChange={handleQueryChange} />
          </div>
          <div className="sections-buttons">
           <div className='sections-buttons_items'>
            <button onClick={toggleVariables} className='item_variables_headers'>Variables</button>
            <button onClick={toggleHeaders} className='item_variables_headers'>Headers</button>
           </div>
          </div>
          <div className="sections_headers_variables">
            <section >
              <div ref={headersRef} className='sections_headers_1' style={{ display: 'none' }}>
              <textarea className='sections_headers_textarea' value={headers} onChange={handleHeadersChange} />
              </div>
              <div ref={variablesRef} className='sections_variables_1' style={{ display: 'none' }}>
              <textarea className='sections_variables_textarea' value={variables} onChange={handleVariablesChange} />
              </div>          
            </section>
          </div>
        </div>
        <div className="wrapper-main_json">
          {/* Display response here */}
          <pre>{JSON.stringify(response, null, 2)}</pre>
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
