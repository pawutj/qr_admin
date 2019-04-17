// import external modules
import React, { Component } from "react";

import {
   Home,
   Mail,
   MessageSquare,
   ChevronRight,
   Aperture,
   Box,
   Edit,
   Grid,
   Layers,
   Sliders,
   Map,
   BarChart2,
   Calendar,
   Copy,
   Book,
   CheckSquare,
   LifeBuoy,
   Users
} from "react-feather";
import { NavLink } from "react-router-dom";

// Styling
import "../../../../assets/scss/components/sidebar/sidemenu/sidemenu.scss";
// import internal(own) modules
import SideMenu from "../sidemenuHelper";

class SideMenuContent extends Component {
   render() {
      return (
         <SideMenu className="sidebar-content" toggleSidebarMenu={this.props.toggleSidebarMenu}>
          
            <SideMenu.MenuSingleItem badgeColor="danger" >
               <NavLink to="/qr" activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">Dashboard </span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem badgeColor="danger">
               <NavLink to="/qrcreate" activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">Create qr </span>
               </NavLink>
            </SideMenu.MenuSingleItem>

            <SideMenu.MenuSingleItem badgeColor="danger">
            <NavLink to="/pages/login" onClick ={() => {localStorage.setItem('user_id','null')
                                                                localStorage.setItem('uuid','null')
                                                                } 
                                                } activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">Logout </span>
               </NavLink>
            </SideMenu.MenuSingleItem>


         </SideMenu>
      );
   }
}

export default SideMenuContent;
