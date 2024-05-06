import api from "../../services/api";
import url from "../../services/url";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Profile_Patient() {
    const {id} = useParams();
    const [patients, setPatientInf] = useState([]);
    const loadPatientInf = async()=>{
        try {
            const rs = await api.get(url.PATIENT.LIST+`?id=${id}`);
            setPatientInf(rs.data);
        } catch (error) {
            console.error("Error loading:", error);
        }
    }

    useEffect(() => {
        loadPatientInf();   
    }, []);
    return (

        <div className="page-wrapper">
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Profile Patient</h3>                          
                        </div>
                    </div>
                </div>
                {patients.map((patient)=>(
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-header">
                            <div className="row align-items-center">
                                <div className="col-auto profile-image">
                                    <a href="#">
                                        <img className="rounded-circle" alt="User Image" src="assets/img/profiles/avatar-01.jpg" />
                                    </a>
                                </div>
                                <div className="col ml-md-n2 profile-user-info">
                                    <h4 className="user-name mb-0">{patient.name}</h4>
                                </div>                              
                            </div>
                        </div>                                   
                        <div className="tab-content profile-tab-cont">

                            <div className="tab-pane fade show active">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title d-flex justify-content-between">
                                                    <span>Personal Details</span>
                                                </h5>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted">Patient ID</p>
                                                    <p className="col-sm-10">{patient.id}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted">Name</p>
                                                    <p className="col-sm-10">{patient.name}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted">Date of Birth</p>
                                                    <p className="col-sm-10">{patient.birthday}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted">Email</p>
                                                    <p className="col-sm-10">{patient.email}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted">Mobile</p>
                                                    <p className="col-sm-10">{patient.phonenumber}</p>
                                                </div>
                                                <div className="row">
                                                    <p className="col-sm-2 text-muted">Address</p>
                                                    <p className="col-sm-10 mb-0">{patient.address}<br/>                                                   </p>
                                                </div>
                                            </div>
                                        </div>                                       

                                    </div>
                                </div>

                            </div>                  
                        </div>
                       
                    </div>
                </div>
                  ))}  
            </div>
            
        </div>
    )
}
export default Profile_Patient