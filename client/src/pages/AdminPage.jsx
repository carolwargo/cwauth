import React, { useState } from "react";
import UsersContainer from "../components/admin/UsersContainer";
import EmailDashboard from "../components/admin/EmailComponent";
import SubscribersContainer from "../components/admin/SubscribersContainer";
import SignUpsContainer from "../components/admin/SignUpsContainer";
import ContactsContainer from "../components/admin/ContactsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

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
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p>Choose dashboard item to display</p>
          <hr />
          <Sidebar style={{ width: '100%' }}>
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  if (level === 0)
                    return {
                      color: disabled ? '#f5d9ff' : '#d359ff',
                      backgroundColor: active ? '#eecef9' : undefined,
                    };
                },
              }}
            >
      
          
              <SubMenu label="Users">
                <MenuItem
                  onClick={() => handleRenderComponent("subscribers")}
                >
                  Subscribers
                </MenuItem>
                <MenuItem
                  onClick={() => handleRenderComponent("signups")}
                >
                  SignUps
                </MenuItem>
                <MenuItem
                  onClick={() => handleRenderComponent("contacts")}
                >
                  Contacts
                </MenuItem>
              </SubMenu>
            
            </Menu>
          </Sidebar>
        </div>

        <div className="col-sm-12 col-md-9 col-lg-9">
          <div className="card" style={{ padding: "20px" }}>
            {activeComponent === "users" && <UsersContainer />}
            {activeComponent === "email" && <EmailDashboard />}
            {activeComponent === "subscribers" && <SubscribersContainer />}
            {activeComponent === "signups" && <SignUpsContainer />}
            {activeComponent === "contacts" && <ContactsContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;


/**  <MenuItem
                onClick={() => handleRenderComponent("email")}
              >
                Email
              </MenuItem> 
                 /** */
               
                /** */