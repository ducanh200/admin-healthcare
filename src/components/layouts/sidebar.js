function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="/dashboard"><i className="fe fe-home"></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="/department"><i className="fe fe-vector"></i> <span>Department</span></a>
                        </li>
                        <li>
                            <a href="/doctor"><i className="fe fe-star-o"></i> <span>Doctor</span></a>
                        </li>
                        <li>
                            <a href="/list_patient"><i className="fe fe-activity"></i> <span>List Patient</span></a>
                        </li>
                        <li>
                            <a href="/list_booking"><i className="fe fe-vector"></i> <span>List Booking</span></a>
                        </li>
                        <li>
                            <a href="/medicine"><i className="fe fe-document"></i> <span>Medicine</span></a>
                        </li>
                        <li>
                            <a href="/arrived"><i className="far fa-clipboard"></i> <span>Arrived</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
