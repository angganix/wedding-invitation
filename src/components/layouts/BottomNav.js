import { NavLink } from "react-router-dom";
import { menuList } from "../../data/menuList.js";
import "../../styles/bottom-nav.scss";

function MenuItem({ title, icon }) {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center">
            <div className="text-center menu-item-icon">
                {icon}
            </div>
            <div className="text-center menu-item-text">
                {title}
            </div>
        </div>
    )
}

function Bottomnav() {
    return (
        <div>
            <div className="d-flex flex-row justify-content-around align-items-center fixed-bottom bg-white p-2 border-top">
                {menuList.map((menu, i) => (
                    <NavLink 
                        key={i} 
                        to={menu.path} 
                        className="text-decoration-none menu-item-link"
                        activeClassName="menu-item-link-active"
                        exact={true}
                    >
                        <MenuItem {...menu} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Bottomnav
