import "./SideBarItem.css";

export const SideNavBarItem = ({ itemIcon, itemName }) => {
  return (
    <div className="sidebar-item">
      <i>{itemIcon}</i>
      <div className="h3">{itemName}</div>
    </div>
  );
};
