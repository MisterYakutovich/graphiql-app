import React, { useState, useRef, ChangeEvent } from 'react';
import fetch from 'isomorphic-fetch';
import './Main.css';
import Documentation from '../../components/documentation/Documentation';

export interface SchemaType {
  data: {
    __schema: {
      types: Array<{
        name: string;
      }>;
    };
  };
}

const Main: React.FC = () => {
  const saveDataToLocalStorage = (key: string, value: string): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const loadDataFromLocalStorage = (key: string): string | null => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  const [query, setQuery] = useState<string>(
    loadDataFromLocalStorage('query') || ''
  );
  const [variables, setVariables] = useState<string>(
    loadDataFromLocalStorage('variables') || ''
  );
  const [headers, setHeaders] = useState<string>(
    loadDataFromLocalStorage('headers') || ''
  );
  const [response, setResponse] = useState<string | null>(
    loadDataFromLocalStorage('response') || null
  );
  const [apiUrl, setApiUrl] = useState<string>(
    loadDataFromLocalStorage('apiUrl') || ''
  );
  const [showDocumentation, setShowDocumentation] = useState<boolean>(false);
  const [variablesButtonColor, setVariablesButtonColor] =
    useState<string>('#41d87b');
  const [headersButtonColor, setHeadersButtonColor] = useState<string>('white');
  const [showVariables, setShowVariables] = useState<boolean>(true);
  const [showHeaders, setShowHeaders] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const documentationRef = useRef<HTMLDivElement>(null);
  const variablesRef = useRef<HTMLDivElement>(null);
  const headersRef = useRef<HTMLDivElement>(null);

  const toggleVariables = () => {
    setShowVariables(true);
    setShowHeaders(false);
    setVariablesButtonColor('#41d87b');
    setHeadersButtonColor('white');

    if (variablesRef.current) {
      variablesRef.current.style.display = 'block';
    }
    if (headersRef.current) {
      headersRef.current.style.display = 'none';
    }
  };

  const toggleHeaders = () => {
    setShowVariables(false);
    setShowHeaders(true);
    setVariablesButtonColor('white');
    setHeadersButtonColor('#41d87b');

    if (variablesRef.current) {
      variablesRef.current.style.display = 'none';
    }
    if (headersRef.current) {
      headersRef.current.style.display = 'block';
    }
  };

  const toggleDocumentation = () => {
    setShowDocumentation(!showDocumentation);

    if (showDocumentation) {
      if (documentationRef.current) {
        documentationRef.current.style.display = 'none';
      }

      if (contentRef.current) {
        contentRef.current.style.gridTemplateColumns = '0.2fr 2fr 2fr';
      }
    } else {
      if (documentationRef.current) {
        documentationRef.current.style.display = 'block';
      }

      if (contentRef.current) {
        contentRef.current.style.gridTemplateColumns = '0.2fr 1.5fr 2fr 2fr';
      }
    }
  };
  const handleQueryChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;
    setQuery(value);
    saveDataToLocalStorage('query', value);
  };

  const handleVariablesChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const value = event.target.value;
    setVariables(value);
    saveDataToLocalStorage('variables', value);
  };

  const handleHeadersChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const value = event.target.value;
    setHeaders(value);
    saveDataToLocalStorage('headers', value);
  };

  const handleApiUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // setApiUrl(event.target.value);
    const value = event.target.value;
    setApiUrl(value);
    saveDataToLocalStorage('apiUrl', value);
  };

  const executeQuery = async () => {
    //let results = await fetch('https://rickandmortyapi.com/graphql'
    try {
      const headersObject: { [key: string]: string } = {};
      if (headers) {
        const headersArray = headers.split(';');
        headersArray.forEach((header) => {
          const [key, value] = header.split(':');
          headersObject[key.trim()] = value.trim();
        });
      }

      const results = await fetch(apiUrl, {
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

      const data = await results.json();
      setResponse(data);

      //
      saveDataToLocalStorage('response', data);

      //
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="wrapper-main">
      <div className="wrapper-main_apiUrl">
        <button onClick={executeQuery}>Execute</button>

        <input type="text" value={apiUrl} onChange={handleApiUrlChange} />
      </div>
      <div className="wrapper-main_content" ref={contentRef}>
        <div className="wrapper-main_content-slider">
          <div className="content-slider" onClick={toggleDocumentation}>
            <button className="content-slider_documentation-button">
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
        {showDocumentation && <Documentation apiUrl={apiUrl} />}

        <div className="wrapper-main_sections">
          <div className="sections-query">
            <label>
              <textarea
                className="sections-qiery_textarea"
                value={query}
                onChange={handleQueryChange}
              />
            </label>
          </div>
          <div className="sections-buttons">
            <div className="sections-buttons_items">
              <button
                id="variables"
                onClick={toggleVariables}
                className="item_variables_headers"
                style={{ backgroundColor: variablesButtonColor }}
              >
                Variables
              </button>
              <button
                id="headers"
                onClick={toggleHeaders}
                className="item_variables_headers"
                style={{ backgroundColor: headersButtonColor }}
              >
                Headers
              </button>
            </div>
          </div>
          <div className="sections_headers_variables">
            <section>
              <div
                className={showHeaders ? 'sections_headers_1' : 'hidden'}
                ref={headersRef}
              >
                <textarea
                  className="sections_headers_textarea"
                  value={headers}
                  onChange={handleHeadersChange}
                />
              </div>
              <div
                className={showVariables ? 'sections_variables_1' : 'hidden'}
                ref={variablesRef}
              >
                <textarea
                  className="sections_variables_textarea"
                  value={variables}
                  onChange={handleVariablesChange}
                />
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
