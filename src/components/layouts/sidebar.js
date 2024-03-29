function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="active">
                            <a href="/dashbroad"><i className="fe fe-home"></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="/medicine"><i className="fe fe-layout"></i> <span>Medicine</span></a>
                        </li>
                        <li>
                            <a href="/doctor"><i className="fe fe-users"></i> <span>Doctor</span></a>
                        </li>
                        <li>
                            <a href="/profile"><i className="fe fe-user-plus"></i> <span>Profile</span></a>
                        </li>
                        <li>
                            <a href="/invoice_reports"><i className="fe fe-user"></i> <span>Invoice Reports</span></a>
                        </li>
                        <li>
                            <a href="list_doctor"><i className="fe fe-star-o"></i> <span>List Doctor</span></a>
                        </li>
                        <li>
                            <a href="/list_patient"><i className="fe fe-activity"></i> <span>List Patient</span></a>
                        </li>
                        <li>
                            <a href="/login"><i className="fe fe-vector"></i> <span>Login</span></a>
                        </li>
                        <li>
                            <a href="/department"><i className="fe fe-vector"></i> <span>Department</span></a>
                        </li>
                        <li>
                            <a href="/list_booking"><i className="fe fe-vector"></i> <span>List Booking</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
