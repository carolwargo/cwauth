import React, { useState, useEffect } from "react";
import UsersContainer from "../components/admin/UsersContainer";
import EmailDashboard from "../components/admin/EmailComponent";
import SubscribersContainer from "../components/admin/SubscribersContainer";
import SignUpsContainer from "../components/admin/SignUpsContainer";
import ContactsContainer from "../components/admin/ContactsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import axios from 'axios'; // For making API requests

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState("users");
  const [notifications, setNotifications] = useState({
    subscribers: 0,
    signups: 0,
    contacts: 0
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const [subscribersRes, signupsRes, contactsRes] = await Promise.all([
          axios.get('/api/subscription/count'),
          axios.get('/api/signups/count'),
          axios.get('/api/contact/count')
        ]);

        setNotifications({
          subscribers: subscribersRes.data.count,
          signups: signupsRes.data.count,
          contacts: contactsRes.data.count
        });
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [activeComponent]); // Re-fetch notifications when component changes

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
                  onClick={() => handleRenderComponent("users")}
                >
                  All Users {notifications.users > 0 && `(${notifications.users})`}
                </MenuItem>
                <MenuItem
                  onClick={() => handleRenderComponent("subscribers")}
                >
                  Subscribers {notifications.subscribers > 0 && `(${notifications.subscribers})`}
                </MenuItem>
            
                <MenuItem
                  onClick={() => handleRenderComponent("contacts")}
                >
                  Contacts {notifications.contacts > 0 && `(${notifications.contacts})`}
                </MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>

        <div className="col-sm-12 col-md-9 col-lg-9">
          <div className="card" style={{ padding: "20px", fontSize:'12px' }}>
            {activeComponent === "users" && <UsersContainer />}
            {activeComponent === "subscribers" && <SubscribersContainer />}
            {activeComponent === "contacts" && <ContactsContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
