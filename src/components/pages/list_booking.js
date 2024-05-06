import React, { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";

function List_booking() {
    const [listbooking, setListbooking] = useState([]);

    useEffect(() => {
        const loadListbooking = async () => {
            try {
                const rs = await api.get(url.BOOKING.LIST);
                setListbooking(rs.data);
            } catch (error) {
                console.error("Error loading list booking:", error);
            }
        };
        loadListbooking();
    }, []);

    const getStatusBadgeClass = (status) => {
        return status === 1 ? "badge rounded-pill bg-success inv-badge" : "badge rounded-pill bg-danger inv-badge";
    };

    return (
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-bory">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                        <h3>List Booking</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body" style={{ paddingTop: "10px" }}>
                                <div className="table-responsive">
                                    <table className=" table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Patient Name</th>
                                                <th>Gender</th>
                                                <th>Phonenumber</th>
                                                <th>Department</th>
                                                <th>Session</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {listbooking.map((booking) => (
                                                <tr key={booking.id}>
                                                    <td>{booking.id}</td>
                                                    <td>{booking.patient.name}</td>
                                                    <td>{booking.patient.gender}</td>
                                                    <td>{booking.patient.phonenumber}</td>
                                                    <td>{booking.department.name}</td>
                                                    <td>{booking.shift.session}</td>
                                                    <td>{booking.date}</td>
                                                    <td>{booking.shift.time}</td>
                                                    <td>
                                                        <span className={`badge rounded-pill inv-badge ${getStatusBadgeClass(booking.status)}`}>
                                                            {booking.status === 1 ? "Completed" : "Incomplete"}
                                                        </span>
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
    )
}

export default List_booking;