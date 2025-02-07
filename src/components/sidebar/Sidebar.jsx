import Image from "next/image";
import classNames from "classnames";

// images
import face8 from "@/assets/images/faces/face8.jpg"

// css
import '@/styles/sidebar.css';

const Sidebar = ({ show }) => {
    return (
        <nav className={classNames("sidebar sidebar-offcanvas", { "active": show })} id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="profile-image">
                            <Image className="img-xs rounded-circle" src={face8} alt="profile image" />
                            <div className="dot-indicator bg-success"></div>
                        </div>
                        <div className="text-wrapper">
                            <p className="profile-name">Allen Moreno</p>
                            <p className="designation">Premium user</p>
                        </div>
                    </a>
                </li>
                <li className="nav-item nav-category">Main Menu</li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="menu-icon typcn typcn-document-text"></i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="menu-icon typcn typcn-coffee"></i>
                        <span className="menu-title">Basic UI Elements</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dropdowns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="menu-icon typcn typcn-shopping-bag"></i>
                        <span className="menu-title">Form elements</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="menu-icon typcn typcn-th-large-outline"></i>
                        <span className="menu-title">Charts</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="menu-icon typcn typcn-bell"></i>
                        <span className="menu-title">Tables</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="menu-icon typcn typcn-user-outline"></i>
                        <span className="menu-title">Icons</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="menu-icon typcn typcn-document-add"></i>
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Blank Page </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Login </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Register </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> 404 </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> 500 </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
