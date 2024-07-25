import React, { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";

function List_booking() {
    const [listbooking, setListbooking] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    useEffect(() => {
        const loadListbooking = async () => {
            try {
                const rs = await api.get(url.BOOKING.LIST);
                const sortedBookings = rs.data.sort((a, b) => b.id - a.id);
                setListbooking(sortedBookings);
            } catch (error) {
                console.error("Error loading list booking:", error);
            }
        };
        loadListbooking();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.get(url.BOOKING.GETBYDATE, {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                },
            });
            setListbooking(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    return (
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-bory" style={{display:'flex'}}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px" }}>
                                        <h3 style={{marginLeft:"30px"}}>List Booking</h3>
                                    </div>
                                </div>
                                <div className="form-filter" style={{width:"950px",marginLeft:'50px'}}>
                                    <form onSubmit={handleSubmit} className="filter" style={{borderRadius:"10px",border:"0px solid #d7d4d4", padding:"10px",display:"flex",justifyContent:'center'}}>
                                    <label style={{marginTop:"8px"}} for="startDate">Start date</label>
                                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" id="startDate" style={{borderRadius: '5px',height: '45px',width:'200px'}} type="date" placeholder="Start Date"></input>
                                    <label style={{marginLeft: "15px",marginTop:"8px"}} for="endDate">End date</label>
                                    <input value={endDate}  onChange={(e) => setEndDate(e.target.value)} className="form-control" id="endDate" style={{borderRadius: '5px',height: '45px',width:'200px'}} type="date" placeholder="End Date"></input>
                                    <button style={{height: '45px',marginLeft: '30px',width: '150px'}} type="submit"class="btn btn-primary">Filter</button>          
                                    <a href="/list_booking" class="btn btn-warning" style={{width: "100px",height: "45px",paddingTop: '10px',marginLeft: '25px'}}>RESET</a>      
                                    </form>
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listbooking.map((booking) => (
                                                <tr key={booking.id}>
                                                    <td>{booking.id}</td>
                                                    <td>{booking.patient?.name}</td>
                                                    <td>{booking.patient?.gender}</td>
                                                    <td>{booking.patient?.phonenumber}</td>
                                                    <td>{booking.department?.name}</td>
                                                    <td>{booking.shift?.session}</td>
                                                    <td>{booking.date}</td>
                                                    <td>{booking.shift?.time}</td>
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

export default List_booking;
