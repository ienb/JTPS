import * as React from 'react';
import type { RouteProps } from 'react-router-dom';
import Layout from '../layout';
import StartPage from '@/views/start';
import WorkPage from '@/views/work';

const routers = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/start',
        element: <StartPage />,
      },
      {
        path: '/work',
        element: <WorkPage />,
      },
    ],
  },
] as RouteProps;

export default routers;
