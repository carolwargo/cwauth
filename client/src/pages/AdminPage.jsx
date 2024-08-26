import React, { useState } from "react";
import { Link } from "react-router-dom";
import UsersContainer from "../components/admin/UsersContainer";
import EmailDashboard from "../components/admin/EmailComponent";
//import { IoLockClosed } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
//import { set } from "mongoose";

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState("users");

  const handleRenderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header w3-black">
        <div className="admin-header-text px-3 py-2 align-items-center">
          <h1
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Admin Dashboard
       
          </h1>

          <p>Welcome to the Admin Dashboard</p>
        </div>
      </div>
<div className="row d-flex justify-content-center align-items-start px-4 mt-3 mb-3">
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
    <li className="breadcrumb-item"><Link href="/">Library</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
</div>
      <div className="row d-flex justify-content-center align-items-start px-4 mt-3 mb-3">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p>Choose dashboard item to display</p>
          <hr />

          <div>
          <Sidebar style={{width:'100%'}}>
  <Menu
    menuItemStyles={{
        button: ({ level, active, disabled }) => {
          // only apply styles on first level elements of the tree
          if (level === 0)
            return {
              color: disabled ? '#f5d9ff' : '#d359ff',
              backgroundColor: active ? '#eecef9' : undefined,
            };
        },
      }}
  >
  <MenuItem
    component={<Link to="#email" />}
    onClick={() => handleRenderComponent("email")}>
        Email
  </MenuItem>
  <SubMenu label="Admin">
      <MenuItem
       component={<Link to="#inbox" />}
       onClick={() => handleRenderComponent("inbox")}
      > Inbox 
      </MenuItem>
      <MenuItem
       component={<Link to="#sent" />}
       onClick={() => handleRenderComponent("sent")}
      > Sent
      </MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/documentation" />}
    onClick={() => handleRenderComponent("users")}
    >Users</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}
    > Subscribers</MenuItem>

  </Menu>
</Sidebar>
          </div>
        </div>

        <div className="col-sm-12 col-md-9 col-lg-9">
          <div className="card" style={{ padding: "20px" }}>
            {activeComponent === "users" && <UsersContainer />}
            {activeComponent === "email" && <EmailDashboard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
