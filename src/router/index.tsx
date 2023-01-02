import * as React from "react";
import Layout from "../layout";
import { RouterConfig } from "../types/router";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const router = [
  {
    path: '/app',
    component: () => import('../views/App'),
    meta: {
      title: '首页'
    }
  }
] as unknown as RouterConfig

const renderRoutes = (routes: any) => {
  // if (!Array.isArray(routes)) {
  //   return null
  // }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {
          routes.map((route: any, index: number) => {
            const { path, component, meta } = route
            console.log(route);
            return (
              <Route
                key={index}
                path={path}
                element={React.createElement(component, { meta })}
              />
            )
          })
        }
      </Route>
    </Routes>
  )
}

const AppRouter = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        {renderRoutes(router)}
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default AppRouter
