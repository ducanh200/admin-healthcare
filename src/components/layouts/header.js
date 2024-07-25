import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate=useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    const getUserInfo = async () => {
        try {
            const response = await api.get(url.ADMIN.PROFILE);
            setUserInfo(response.data);
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };
    return (
        <div className="header">
            <div className="header-left">
                <a href="/dashboard" className="logo">
                    <img src="assets/img/logo.png" alt="Logo" />
                </a>
                <a href="/dashboard" className="logo logo-small">
                    <img src="assets/img/logo-small.png" alt="Logo" width="30" height="30" />
                </a>
            </div>



            <a className="mobile_btn" id="mobile_btn">
                <i className="fa fa-bars"></i>
            </a>

            <ul className="nav user-menu">

                <li className="nav-item dropdown has-arrow">
                    <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span className="user-img"><img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGFwNXyPYyinjA6jMFN3qOl4lvrAukvlA5g&s" width="31" alt="Ryan Taylor" /></span>
                    </a>
                    <div className="dropdown-menu">
                        <div className="user-header">
                            <div className="avatar avatar-sm">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGFwNXyPYyinjA6jMFN3qOl4lvrAukvlA5g&s" alt="User Image" className="avatar-img rounded-circle" />
                            </div>

                            <div className="user-text"> 
                                <h6>{userInfo ? userInfo.name : "Not found !"}</h6>
                                <p className="text-muted mb-0">{userInfo ? userInfo.email : "Not found !"}</p>
                            </div>
                </div>
                        {/* <a className="dropdown-item" href="/profile">My Profile</a> */}
                        <a className="dropdown-item" onClick={handleLogout}>Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Header;