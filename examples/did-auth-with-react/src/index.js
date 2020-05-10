import React from 'react';
import ReactDOM from 'react-dom';
import { DidSessionProvider } from '@arcblock/did-connect/lib';

import './index.css';
import LoginPage from './LoginPage';

// Please change these to your own application settings
const appDid = 'zNKX8eewCV5P5KF6YxJ94ejrx2Z5yLgc1kcm';
const serviceHost = 'http://192.168.1.28:8090';

// Required: Wrap the application with DidSessionProvider
const WrappedApp = () => (
  <DidSessionProvider appDid={appDid} serviceHost={serviceHost} authAPIPrefix="/api/login/agent">
    <LoginPage />
  </DidSessionProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
