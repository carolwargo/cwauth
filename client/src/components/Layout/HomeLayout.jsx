import React from "react";
import {Outlet} from "react-router-dom";
import BlackHeader from "../Header/BlackHeader";
const HomeLayout = ({ children }) => { 

    return (
        <div>
           <BlackHeader />
          
<Outlet />
        </div>
    );
}

export default HomeLayout;