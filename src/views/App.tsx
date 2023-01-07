import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from '../router';

const App = () => {
  // @ts-ignore
  const element = useRoutes(routers);

  console.log(element);
  return <div>{element}</div>;
};
export default App;
