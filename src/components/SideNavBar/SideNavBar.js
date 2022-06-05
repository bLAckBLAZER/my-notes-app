import { MdHome, MdArchive, MdDelete } from "react-icons/md";

import { NavLink } from "react-router-dom";

import { SideNavBarItem } from "./SideNavBarItem";

export const SideNavBar = () => {
  const getNavStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive && "#00a82d",
      color: isActive && "white",
    };
  };

  return (
    <aside className="side-navbar">
      <NavLink to="/dashboard" style={getNavStyle}>
        <SideNavBarItem itemName="Dashboard" itemIcon={<MdHome size={28} />} />
      </NavLink>
      <NavLink to="/archive" style={getNavStyle}>
        <SideNavBarItem itemName="Archive" itemIcon={<MdArchive size={28} />} />
      </NavLink>
      <NavLink to="/trash" style={getNavStyle}>
        <SideNavBarItem itemName="Trash" itemIcon={<MdDelete size={28} />} />
      </NavLink>
    </aside>
  );
};

//
