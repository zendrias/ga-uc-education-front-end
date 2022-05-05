import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {/* {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      } */}
      {user ?
      <div style={{ height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="white">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'black' }}>
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color: 'black' }}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/modules" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" style={{ color: 'black' }}>Modules</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Events Center</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter >
        <Link to="/login" onClick={handleLogout}>LOG OUT</Link>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
: <div >
</div>}
    </>
  )
}

export default NavBar
