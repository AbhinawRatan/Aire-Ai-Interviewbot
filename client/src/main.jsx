import React from 'react'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-zrmuw7el0iftjz4i.us.auth0.com"
    clientId="aonOys9ko8IXwEsvXH2Xb2tZrmtt0py9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);