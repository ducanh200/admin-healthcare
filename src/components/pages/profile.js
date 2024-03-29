function Profile() {
    return (
        <div class="page-wrapper" style={{textAlign: "justify"}}>
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="profile-header">
                            <div class="row align-items-center">
                                <div class="col-auto profile-image">
                                    <a href="#">
                                        <img class="rounded-circle" alt="User Image" src="assets/img/profiles/avatar-01.jpg" />
                                    </a>
                                </div>
                                <div class="col ml-md-n2 profile-user-info">
                                    <h4 class="user-name mb-0">Ryan Taylor</h4>
                                    <h6 class="text-muted"><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b8cac1d9d6ccd9c1d4d7caf8d9dcd5d1d696dbd7d5">[email&#160;protected]</a></h6>
                                    <div class="user-Location"><i class="fa-solid fa-location-dot"></i> Florida, United States</div>
                                    <div class="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div class="col-auto profile-btn">
                                    <a href="#" class="btn btn-primary">
                                        Edit
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="profile-menu">
                            <ul class="nav nav-tabs nav-tabs-solid">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#per_details_tab">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#password_tab">Password</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content profile-tab-cont">
                            <div class="tab-pane fade show active" id="per_details_tab">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title d-flex justify-content-between">
                                                    <span>Personal Details</span>
                                                    <a class="edit-link" data-bs-toggle="modal" href="#edit_personal_details"><i class="fa fa-edit me-1"></i>Edit</a>
                                                </h5>
                                                <div class="row">
                                                    <p class="col-sm-2 text-muted">Name</p>
                                                    <p class="col-sm-10">John Doe</p>
                                                </div>
                                                <div class="row">
                                                    <p class="col-sm-2 text-muted">Date of Birth</p>
                                                    <p class="col-sm-10">24 Jul 1983</p>
                                                </div>
                                                <div class="row">
                                                    <p class="col-sm-2 text-muted">Email ID</p>
                                                    <p class="col-sm-10"><a href="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="f9939691979d969cb99c81989489959cd79a9694">[email&#160;protected]</a></p>
                                                </div>
                                                <div class="row">
                                                    <p class="col-sm-2 text-muted">Mobile</p>
                                                    <p class="col-sm-10">305-310-5857</p>
                                                </div>
                                                <div class="row">
                                                    <p class="col-sm-2 text-muted">Address</p>
                                                    <p class="col-sm-10 mb-0">4663 Agriculture Lane,<br />
                                                        Miami,<br />
                                                        Florida - 33165,<br />
                                                        United States.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal fade" id="edit_personal_details" aria-hidden="true" role="dialog">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Personal Details</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">First Name</label>
                                                                        <input type="text" class="form-control" value="John" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Last Name</label>
                                                                        <input type="text" class="form-control" value="Doe" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Date of Birth</label>
                                                                        <div class="cal-icon">
                                                                            <input type="text" class="form-control " value="24-07-1983" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Email ID</label>
                                                                        <input type="email" class="form-control" value="johndoe@example.com" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Mobile</label>
                                                                        <input type="text" value="+1 202-555-0125" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <h5 class="form-title"><span>Address</span></h5>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Address</label>
                                                                        <input type="text" class="form-control" value="4663 Agriculture Lane" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">City</label>
                                                                        <input type="text" class="form-control" value="Miami" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">State</label>
                                                                        <input type="text" class="form-control" value="Florida" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Zip Code</label>
                                                                        <input type="text" class="form-control" value="22434" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-sm-6">
                                                                    <div class="mb-3">
                                                                        <label class="mb-2">Country</label>
                                                                        <input type="text" class="form-control" value="United States" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="submit" class="btn btn-primary w-100">Save</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="password_tab" class="tab-pane fade">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Change Password</h5>
                                        <div class="row">
                                            <div class="col-md-10 col-lg-6">
                                                <form>
                                                    <div class="mb-3">
                                                        <label class="mb-2">Old Password</label>
                                                        <input type="password" class="form-control" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="mb-2">New Password</label>
                                                        <input type="password" class="form-control" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="mb-2">Confirm Password</label>
                                                        <input type="password" class="form-control" />
                                                    </div>
                                                    <button class="btn btn-primary" type="submit">Save Changes</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;