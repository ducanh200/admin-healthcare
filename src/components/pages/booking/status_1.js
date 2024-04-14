import { useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";

function Status_1() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const loadBooking = async () => {
            try {
                const rs = await api.get(url.BOOKING.LIST);
                const activeBookings = rs.data.filter(booking => booking.status === 1);
                setBookings(activeBookings);
            } catch (error) {
                console.error("Error loading list booking:", error);
            }
        };
        loadBooking();
    }, []);
    const [patient,setPatient] = useState({});
    const loadPatient = async (patientId) => {
        try {
          const rs = await api.get(url.PATIENT.GETID + `/${patientId}`);
          setPatient(rs.data); 
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const [idBooking, setIdBooking] = useState({});
      const handlId  = (id)=>{
           setIdBooking(id);
      }
      const statusChange = async () => {
        try {
          const rs = await api.put(url.BOOKING.STATUS_CHANGE + `${idBooking}`);
          setPatient(rs.data); 
          toast.success('Comfirm Success');
        } catch (error) {
          console.error("Error:", error);
          toast.error("An erroer!");
        }
      };
    
    return (
        <>
        <div class="page-wrapper" style={{ textAlign: "justify" }}>
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-bory">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                        <h3>List Booking</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" style={{ paddingTop: "10px" }}>
                                <div class="table-responsive">
                                    <table class=" table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>User</th>
                                                <th>Department</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        {bookings.map((booking) => (
                                        <tbody>
                                            <tr>
                                                <td>
                                               {booking.id}
                                                </td>
                                                <td>
                                            Email: {booking.patient.email}<br/>Phone: {booking.patient.phonenumber}
                                            <br/> <br/><a href="#" class="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details"onClick={()=>loadPatient(booking.patient.id)}>
<i class="far fa-eye" ></i> Click view detail User
</a></td>
                                                <td>
                                                <h2 class="table-avatar">
<a  class="avatar avatar-sm me-2">
<img class="avatar-img" src={booking.department.thumbnail} alt="Speciality"/>
</a>
{booking.department.name}
</h2>
                                                </td>
                                                <td>{booking.date}</td>
                                                <td>
                                               {booking.shift.time}<br/>{booking.shift.session}
                                                </td>
                                                <td>
                                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
<i class="fas fa-times"></i> Delete
</a>
<a class="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_specialities_details" onClick={()=>handlId(booking.id)} >
<i class="fas fa-check"></i>  
Confirm
</a>
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
        <div class="modal fade custom-modal" id="appt_details">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">User Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
        </div>
        <div class="modal-body">
        <ul class="info-details">
        <li>
        <span> Id: {patient.id}</span>
        </li>
        <li>
        <span> Name: {patient.name}</span>
        </li>
        <li>
        <span> Email: {patient.email}</span>
        </li>
        <li>
        <span> Phone: {patient.phonenumber}</span>
        </li>
        <li>
        <span> Gender: {patient.gender}</span>
        </li>
        <li>
        <span> Birthday: {patient.birthday}</span>
        </li>
        <li>
        <span> Address: {patient.address}</span>
        </li>
        <li>
        <span> City: {patient.city}</span>
        </li>
        </ul>
        </div>
           
        </div>
        </div>
        </div>
        <div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="myModalLabel">Confirm the guest has arrived</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>statusChange()}>Confirm</button>
      </div>
    </div>
</div>
</div>

        </>
    )
}

export default Status_1;