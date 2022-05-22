import { MdHome, MdArchive, MdDelete } from "react-icons/md";

import { NavLink } from "react-router-dom";

import { SideNavBarItem } from "./SideNavBarItem";

export const SideNavBar = () => {
  return (
    <aside className="side-navbar">
      <NavLink
        to="/home"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive && "#00a82d",
            color: isActive && "white",
          };
        }}
      >
        <SideNavBarItem itemName="Home" itemIcon={<MdHome size={28} />} />
      </NavLink>
      <NavLink
        to="/archive"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive && "#00a82d",
            color: isActive && "white",
          };
        }}
      >
        <SideNavBarItem itemName="Archive" itemIcon={<MdArchive size={28} />} />
      </NavLink>
      <NavLink
        to="/trash"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive && "#00a82d",
            color: isActive && "white",
          };
        }}
      >
        <SideNavBarItem itemName="Trash" itemIcon={<MdDelete size={28} />} />
      </NavLink>
    </aside>
  );
};
