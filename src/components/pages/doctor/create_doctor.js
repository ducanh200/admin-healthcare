function Create_doctor() {
    return (
        <div class="page-wrapper" style={{textAlign: "justify"}}>
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div className="card-body" style={{ paddingBottom: "0px", textAlign: "center"}}>
                                <h2>Create Doctor</h2>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm">
                                        <form class="needs-validation" novalidate>
                                            <div class="row">
                                                <div class="col-md-4 mb-3">
                                                    <label class="mb-2" for="validationCustom01">First name</label>
                                                    <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="" required />
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <label class="mb-2" for="validationCustom02">Last name</label>
                                                    <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="" required />
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                    <label class="mb-2" for="validationCustomUsername">Username</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                                                        <div class="invalid-feedback">
                                                            Please choose a username.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label class="mb-2" for="validationCustom03">City</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder="City" required />
                                                    <div class="invalid-feedback">
                                                        Please provide a valid city.
                                                    </div>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="mb-2" for="validationCustom04">State</label>
                                                    <input type="text" class="form-control" id="validationCustom04" placeholder="State" required />
                                                    <div class="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="mb-2" for="validationCustom05">Zip</label>
                                                    <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required />
                                                    <div class="invalid-feedback">
                                                        Please provide a valid zip.
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <button class="btn btn-primary" type="submit">Create Doctor</button>
                                        </form>
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

export default Create_doctor;