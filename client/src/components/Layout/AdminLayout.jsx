import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";

const AdminLayout = ({ children }) => { 

    return (
        <div>
            {children}
<Outlet />
<Footer/>
        </div>
    );
}

export default AdminLayout;