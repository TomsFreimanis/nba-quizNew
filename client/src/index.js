import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';


//fgggg 
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const root = ReactDOM.createRoot(document.getElementById('root'));

const tree = GOOGLE_CLIENT_ID
  ? <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}><App /></GoogleOAuthProvider>
  : <App />;

root.render(<React.StrictMode>{tree}</React.StrictMode>);
