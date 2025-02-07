import React from 'react';
import Image from 'next/image';
import '@/styles/navbar.css'

//imgs
import logo from '@/assets/images/logo.svg'
import logoMini from '@/assets/images/logo-mini.svg'
import face1 from "@/assets/images/faces/face1.jpg"
import face8 from "@/assets/images/faces/face8.jpg"
import face10 from "@/assets/images/faces/face10.jpg"
import face12 from "@/assets/images/faces/face12.jpg"


const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="navbar ps-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <a className="navbar-brand brand-logo" href="#">
                    <Image src={logo} alt='logo' />
                </a>
                <a className="navbar-brand brand-logo-mini" href="#">
                    <Image src={logoMini} alt='logo' />
                </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center">
                <ul className="navbar-nav">
                    <button onClick={toggleSidebar} className="btn navbar-toggler navbar-toggler-left d-lg-none align-self-center" type="button">
                        <span className="material-icons-outlined">menu</span>
                    </button>
                    <li className="nav-item dropdown language-dropdown">
                        <a className="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="d-inline-flex me-0 me-md-3">
                                <div className="flag-icon-wrapper">
                                    <i className="fi fi-us"></i>
                                </div>
                            </div>
                            <span className="profile-text font-weight-medium d-none d-md-block">English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
                            <a className="dropdown-item">
                                <div className="flag-icon-wrapper">
                                    <i className="fi fi-us"></i>
                                </div>English
                            </a>
                            <a className="dropdown-item">
                                <div className="flag-icon-wrapper">
                                    <i className="fi fi-in"></i>
                                </div>Hindi
                            </a>
                            <a className="dropdown-item">
                                <div className="flag-icon-wrapper">
                                    <i className="fi fi-ae"></i>
                                </div>Arabic
                            </a>
                            <a className="dropdown-item">
                                <div className="flag-icon-wrapper">
                                    <i className="fi fi-ru"></i>
                                </div>Russian
                            </a>
                        </div>
                    </li>
                </ul>
                <form className="ms-auto search-form d-none d-md-block" action="#">
                    <div className="form-group">
                        <input type="search" className="form-control" placeholder="Search Here" />
                    </div>
                </form>

                {/* Notification Dropdown */}
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="material-icons-outlined">notifications</span>
                            <span className="count">7</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                            <a className="dropdown-item py-3">
                                <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                                <span className="badge badge-pill badge-primary float-right">View all</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <Image src={face10} alt="image" className="img-sm" />
                                </div>
                                <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <Image src={face12} alt="image" className="img-sm" />
                                </div>
                                <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <Image src={face1} alt="image" className="img-sm" />
                                </div>
                                <div className="preview-item-content flex-grow py-2">
                                    <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                                    <p className="font-weight-light small-text"> The meeting is cancelled </p>
                                </div>
                            </a>
                        </div>
                    </li>

                    {/* Message Dropdown */}
                    <li className="nav-item dropdown">
                        <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                            <span className="material-icons-outlined">mail</span>
                            <span className="count bg-success">3</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                            <a className="dropdown-item py-3 border-bottom">
                                <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                                <span className="badge badge-pill badge-primary float-right">View all</span>
                            </a>
                            <a className="dropdown-item preview-item py-3">
                                <div className="preview-thumbnail">
                                    <span className="material-icons m-auto text-primary">warning</span>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0"> Just now </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item py-3">
                                <div className="preview-thumbnail">
                                    <span className="material-icons m-auto text-primary">settings</span>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                                    <p className="font-weight-light small-text mb-0"> Private message </p>
                                </div>
                            </a>
                            <a className="dropdown-item preview-item py-3">
                                <div className="preview-thumbnail">
                                    <span className="material-icons m-auto text-primary">app_registration</span>
                                </div>
                                <div className="preview-item-content">
                                    <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                                    <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                                </div>
                            </a>
                        </div>
                    </li>

                    {/* Profile dropdown */}
                    <li className="nav-item dropdown d-none d-xl-inline-block profile">
                        <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <Image className="img-xs rounded-circle" src={face8} alt="Profile image" /> </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                            <div className="dropdown-header text-center">
                                <Image className="img-md rounded-circle" src={face8} alt="Profile image" />
                                <p className="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                                <p className="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
                            </div>
                            <a className="dropdown-item">My Profile <span className="badge badge-pill badge-danger">1</span></a>
                            <a className="dropdown-item">Messages</a>
                            <a className="dropdown-item">Activity<i className="dropdown-item-icon ti-location-arrow"></i></a>
                            <a className="dropdown-item">FAQ</a>
                            <a className="dropdown-item">Sign Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
