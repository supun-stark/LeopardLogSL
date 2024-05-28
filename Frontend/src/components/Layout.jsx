import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';


function Layout({ children }) {
    //Get the current path 
  const location = useLocation();

  // List of paths where NavBar and SideBar should not be shown
  const noNavBarSideBarPaths = ['/login','/signup'];
  

  const shouldShowNavBarAndSideBar = !noNavBarSideBarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavBarAndSideBar && <NavBar/>}
      {shouldShowNavBarAndSideBar && <SideBar/>}
      {children}
    </>
  );
}

export default Layout;
