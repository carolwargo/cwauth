import React from "react";
import {Outlet} from "react-router-dom";
const AdminLayout = ({ children }) => { 

    return (
        <div>
            <h1>Admin Layout</h1>
            {children}
<Outlet />
        </div>
    );
}

export default AdminLayout;