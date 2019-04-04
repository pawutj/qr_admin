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
          
            <SideMenu.MenuSingleItem badgeColor="danger" badgeText="6">
               <NavLink to="/qr" activeclassname="active">
                  <i className="menu-icon">
                     <Mail size={18} />
                  </i>
                  <span className="menu-item-text">QR </span>
               </NavLink>
            </SideMenu.MenuSingleItem>


            <SideMenu.MenuMultiItems
               name="Pages"
               Icon={<Copy size={18} />}
               ArrowRight={<ChevronRight size={16} />}
               collapsedSidebar={this.props.collapsedSidebar}
            >
               <NavLink to="/pages/user-profile" className="item" activeclassname="active">
                  <span className="menu-item-text">User Profile</span>
               </NavLink>
               <NavLink to="/pages/horizontal-timeline" className="item" activeclassname="active">
                  <span className="menu-item-text">Horizontal Timeline</span>
               </NavLink>
               <NavLink to="/pages/vertical-timeline" className="item" activeclassname="active">
                  <span className="menu-item-text">Vertical Timeline</span>
               </NavLink>
               <NavLink to="/pages/faq" className="item" activeclassname="active">
                  <span className="menu-item-text">FAQ</span>
               </NavLink>
               <NavLink to="/pages/knowledge-base" className="item" activeclassname="active">
                  <span className="menu-item-text">Knowledge Base</span>
               </NavLink>
               <NavLink to="/pages/gallery" className="item" activeclassname="active">
                  <span className="menu-item-text">Gallery</span>
               </NavLink>
               <NavLink to="/pages/search" className="item" activeclassname="active">
                  <span className="menu-item-text">Search</span>
               </NavLink>
               <NavLink to="/pages/invoice" className="item" activeclassname="active">
                  <span className="menu-item-text">Invoice</span>
               </NavLink>
               <NavLink to="/pages/blank-page" className="item" activeclassname="active">
                  <span className="menu-item-text">Blank Page</span>
               </NavLink>
               <NavLink to="/pages/login" className="item" activeclassname="active">
                  <span className="menu-item-text">Login</span>
               </NavLink>
               <NavLink to="/pages/register" className="item" activeclassname="active">
                  <span className="menu-item-text">Register</span>
               </NavLink>
               <NavLink to="/pages/forgot-password" className="item" activeclassname="active">
                  <span className="menu-item-text">Forgot Password</span>
               </NavLink>
               <NavLink to="/pages/lockscreen" className="item" activeclassname="active">
                  <span className="menu-item-text">Lock Screen</span>
               </NavLink>
               <NavLink to="/pages/error" className="item" activeclassname="active">
                  <span className="menu-item-text">Error</span>
               </NavLink>
               <NavLink to="/pages/maintenance" className="item" activeclassname="active">
                  <span className="menu-item-text">Maintenance</span>
               </NavLink>
            </SideMenu.MenuMultiItems>

         </SideMenu>
      );
   }
}

export default SideMenuContent;
