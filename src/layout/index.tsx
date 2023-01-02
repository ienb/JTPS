import React from "react"
import Header from './header'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div className="layout">
      <Header title="Design and Implementation of NPO - Non-Profit Network Architecture" />
      {/*<Outlet />*/}
    </div>
  )
}

export default layout
