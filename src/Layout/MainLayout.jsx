import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const MainLayout = ({statusHeader ,headerNew}) => {
  return (
    <>
        <Header statusHeader={statusHeader} headerNew={headerNew}/>
        <Outlet />
    </>
  )
}

export default MainLayout
