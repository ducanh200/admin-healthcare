import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";

function List_doctor() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const loadDoctor = async () => {
            try {
                const rs = await api.get(url.DOCTOR.LIST);
                setDoctors(rs.data);
            } catch (error) {
                console.error("Error loading doctors:", error);
            }
        };
        loadDoctor();
    }, []);

    return (
        <div class="page-wrapper" style={{ textAlign: "justify" }}>
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-bory">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                        <h3>List Doctor</h3>
                                    </div>
                                    <div style={{ marginTop: "15px", textAlign: "right", marginRight: "30px" }}>
                                        <a href="/create_doctor" className="btn btn-primary">Create Doctor</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" style={{ paddingTop: "10px" }}>
                                <div class="table-responsive">
                                    <table class=" table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Doctor Name</th>
                                                <th>Gmail</th>
                                                <th>PhoneNumber</th>
                                                <th>Department</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {doctors.map((doctor)=>(
                                        <tbody>
                                            <tr>
                                                <td>#{doctor.id}</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src={doctor.thumbnail} alt="User Image" /></a>
                                                        <a href="profile.html">{doctor.name}</a>
                                                    </h2>
                                                </td>
                                                <td>{doctor.email}</td>
                                                <td>{doctor.phonenumber}</td>
                                                <td>{doctor.department.name}</td>
                                                <td>
                                                <div class="actions">
                                                <a class="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_specialities_details">
                                                <i class="fe fe-pencil"></i> Edit
                                                </a>
                                                  
                                                <a data-bs-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light" style={{marginLeft:"10px"}}>
                                                <i class="fe fe-trash"></i> Delete
                                                </a>
                                                </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List_doctor;