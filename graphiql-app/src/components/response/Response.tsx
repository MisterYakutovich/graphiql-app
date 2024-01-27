import { FC } from 'react';
import './Response.css';

interface ResponseProps {
  response: string | null;
  resError: string | null;
  isLoading: boolean;
  apiUrl: string;
}
const Response: FC<ResponseProps> = ({ response, resError, isLoading }) => {
  return (
    <div className="wrapper-main_json" data-testid="response">
      {isLoading && <div>Loading...</div>}
      {!isLoading && resError && (
        <div className="error-message">{resError}</div>
      )}
      {!isLoading && !resError && (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
};
export default Response;
