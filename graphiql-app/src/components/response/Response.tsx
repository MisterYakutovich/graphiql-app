import { FC } from 'react';
import './Response.css';

interface ResponseProps {
  response: string | null;
}
const Response: FC<ResponseProps> = ({ response }) => {
  return (
    <div className="wrapper-main_json" data-testid="response">
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};
export default Response;
