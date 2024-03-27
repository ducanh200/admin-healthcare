function Sidebar(){
    return(
        <div class="sidebar" id="sidebar">
<div class="sidebar-inner slimscroll">
<div id="sidebar-menu" class="sidebar-menu">
<ul>
<li class="menu-title">
<span>Main</span>
</li>
<li class="active">
<a href="index.html"><i style={{fontSize:"15px"}} class="fa fa-home"></i> <span>Dashboard</span></a>
</li>
<li>
<a href="appointment-list.html"><i style={{fontSize:"15px"}} class="fa-regular fa-calendar-check"></i> <span>Appointments</span></a>
</li>
<li>
<a href="specialities.html"><i style={{fontSize:"15px"}} class="fa fa-users"></i> <span>Specialities</span></a>
</li>
<li>
<a href="doctor-list.html"><i style={{fontSize:"15px"}} class="fa fa-user-plus"></i> <span>Doctors</span></a>
</li>
<li>
<a href="patient-list.html"><i style={{fontSize:"15px"}} class="fa fa-user"></i> <span>Patients</span></a>
</li>
<li>
<a href="reviews.html"><i style={{fontSize:"15px"}} class="fa-regular fa-star"></i> <span>Reviews</span></a>
</li>
<li>
<a href="transactions-list.html"><i style={{fontSize:"15px"}} class="fa-solid fa-chart-line"></i> <span>Transactions</span></a>
</li>
<li class="submenu">
<a href="#"><i style={{fontSize:"15px"}} class="fa-solid fa-file-invoice"></i> <span> Reports</span></a>
</li>
<li class="menu-title">
<span>Pages</span>
</li>
<li>
<a href="profile.html"><i style={{fontSize:"15px"}} class="fa fa-user-plus"></i> <span>Profile</span></a>
</li>
<li class="submenu">
<a href="#"><i style={{fontSize:"15px"}} class="fa fa-document"></i> <span> Authentication </span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li><a href="login.html"> Login </a></li>
<li><a href="register.html"> Register </a></li>
<li><a href="forgot-password.html"> Forgot Password </a></li>
<li><a href="lock-screen.html"> Lock Screen </a></li>
</ul>
</li>
<li class="submenu">
<a href="#"><i style={{fontSize:"15px"}} class="fa fa-warning"></i> <span> Error Pages </span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li><a href="error-404.html">404 Error </a></li>
<li><a href="error-500.html">500 Error </a></li>
</ul>
</li>
<li>
<a href="blank-page.html"><i style={{fontSize:"15px"}} class="fa fa-file"></i> <span>Blank Page</span></a>
</li>
<li class="menu-title">
<span>UI Interface</span>
</li>
<li>
<a href="components.html"><i style={{fontSize:"15px"}} class="fa fa-vector"></i> <span>Components</span></a>
</li>
<li class="submenu">
<a href="#"><i style={{fontSize:"15px"}} class="fa fa-layout"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li><a href="form-basic-inputs.html">Basic Inputs </a></li>
<li><a href="form-input-groups.html">Input Groups </a></li>
<li><a href="form-horizontal.html">Horizontal Form </a></li>
<li><a href="form-vertical.html"> Vertical Form </a></li>
<li><a href="form-mask.html"> Form Mask </a></li>
<li><a href="form-validation.html"> Form Validation </a></li>
</ul>
</li>
<li class="submenu">
<a href="#"><i style={{fontSize:"15px"}} class="fa fa-table"></i> <span> Tables </span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li><a href="tables-basic.html">Basic Tables </a></li>
<li><a href="data-tables.html">Data Table </a></li>
</ul>
</li>
<li class="submenu">
<a href="javascript:void(0);"><i style={{fontSize:"15px"}} class="fa fa-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li class="submenu">
<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
<li class="submenu">
<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
<ul style={{display: 'none'}}>
<li><a href="javascript:void(0);">Level 3</a></li>
<li><a href="javascript:void(0);">Level 3</a></li>
</ul>
</li>
<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
</ul>
</li>
<li>
<a href="javascript:void(0);"> <span>Level 1</span></a>
</li>
</ul>
</li>
</ul>
</div>
</div>
</div>
    )
}
export default Sidebar;