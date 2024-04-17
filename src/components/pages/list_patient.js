import React, { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";

function List_patient() {
    const [patients, setPatient] = useState([]);

    useEffect(() => {
        const loadPatient = async () => {
            try {
                const rs = await api.get(url.PATIENT.LIST);
                setPatient(rs.data);
            } catch (error) {
                console.error("Error loading doctors:", error); 
            }
        };
        loadPatient();
    }, []);

    return (
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                        <h3>List Patient</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{ paddingTop: "10px" }}>
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Birthday</th>
                                                <th>Phone Number</th>
                                                <th>Address</th>
                                                <th>City</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patients.map((patient) => (
                                                <tr key={patient.id}>
                                                    <td>#{patient.id}</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html">{patient.name}</a>
                                                        </h2>
                                                    </td>
                                                    <td>{patient.email}</td>
                                                    <td>{patient.gender}</td>
                                                    <td>{patient.birthday}</td>
                                                    <td>{patient.phonenumber}</td>
                                                    <td>{patient.address}</td>
                                                    <td>{patient.city}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List_patient;
