import { FC, useEffect, useState } from 'react';
import './Documentation.css';
import { SchemaType } from '../../pages/main/Main';

interface DocumentationProps {
  apiUrl: string;
}
const Documentation: FC<DocumentationProps> = ({ apiUrl }) => {
  const [schema, setSchema] = useState<SchemaType | null>(null);

  useEffect(() => {
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
          const data: SchemaType = await response.json();
          setSchema(data);
        } catch (error) {
          console.error('Error fetching schema:', error);
        }
      };
      fetchSchema();
    }
  }, [apiUrl]);

  return (
    <div className="wrapper-main_documentation">
      {' '}
      {schema?.data.__schema.types.map((i) => <pre key={i.name}>{i.name}</pre>)}
    </div>
  );
};
export default Documentation;
