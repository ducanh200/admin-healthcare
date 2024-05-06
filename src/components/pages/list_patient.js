import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
function List_patient() {
    const [patients, setPatient] = useState([]);  
    const loadPatient = async () => {
        try {
            const rs = await api.get(url.PATIENT.LIST);
            setPatient(rs.data);
        } catch (error) {          
        }   
    };
    useEffect(() => {
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
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patients.map((patient) => (
                                                <tr key={patient.id}>
                                                    <td>#{patient.id}</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                         <td> {patient.name}</td>
                                                        </h2>
                                                    </td>
                                                    <td>{patient.email}</td>
                                                    <td>{patient.gender}</td>
                                                    <td>{patient.birthday}</td> 
                                                    <td>{patient.phonenumber}</td>
                                                    <td>{patient.address}</td>
                                                    <td>{patient.city}</td>
                                                    <td>
                                                    <td> <Link 
                                                            to={`/profile_patient/${patient.id}`} 
                                                            className="btn btn-primary" 
                                                            style={{ border: "0", backgroundColor: "#03a9f3" }}
                                                        >
                                                            View
                                                        </Link></td>
                                                    </td>
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
