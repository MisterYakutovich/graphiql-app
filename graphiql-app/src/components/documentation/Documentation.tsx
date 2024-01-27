import { FC, useEffect, useState } from 'react';
import './Documentation.css';
import { SchemaType } from '../../pages/main/Main';

interface DocumentationProps {
  apiUrl: string;
}
const Documentation: FC<DocumentationProps> = ({ apiUrl }) => {
  const [schema, setSchema] = useState<SchemaType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    if (apiUrl) {
      const fetchSchema = async () => {
        try {
          const response = await fetch(apiUrl, {
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

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data: SchemaType = await response.json();
          setSchema(data);
          setError(null);
        } catch (error) {
          console.error('Error fetching schema:', error);
          setError('Error fetching schema');
        } finally {
          setIsLoading(false);
        }
      };
      fetchSchema();
    }
  }, [apiUrl]);

  return (
    <div className="wrapper-main_documentation">
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div className="error-message">{error}</div>}
      {!isLoading &&
        !error &&
        schema?.data.__schema.types.map((i) => (
          <pre key={i.name}>{i.name}</pre>
        ))}
    </div>
  );
};
export default Documentation;
