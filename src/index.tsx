import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/views/App';

import './styles/index.less';

const container: any = document.getElementById('root');
const root = createRoot(container);

if (root) {
  root.render(
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  );
}
