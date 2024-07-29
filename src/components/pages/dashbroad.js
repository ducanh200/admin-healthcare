import { Chart } from "chart.js";
import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";

function Dashbroad() {


    const [departments, setDepartments] = useState([]);
    const [bookingCounts, setBookingCounts] = useState([]);
    const [listbooking, setListbooking] = useState([]);
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
    const loadDepartment = async () => {
        try {
            const rs = await api.get(url.DEPARTMENT.LIST);
            setDepartments(rs.data);
        } catch (error) {
            console.error("Error loading departments:", error);
        }
    };

    const loadBooking = async (departmentId) => {
        try {
            const rs = await api.get(url.BOOKING.GETBYDEPARTMENTID + departmentId);
            return rs.data.length;
        } catch (error) {
            console.error("Error loading bookings:", error);
            return 0;
        }
    }

    useEffect(() => {
        loadDepartment();
    }, []);

    const [patients, setPatients] = useState([]);

    const loadPatients = async () => {
        try {
            const rs = await api.get(url.PATIENT.LIST);
            setPatients(rs.data);
            console.log(rs)
            console.log(`Number of patients: ${rs.data.length}`);
        } catch (error) {
            console.error('Error loading patients:', error);
        }
    };

    useEffect(() => {
        loadPatients();
    }, []);
    const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const loadDoctor = async () => {
      try {
        const rs = await api.get(url.DOCTOR.LIST);
        setDoctors(rs.data);
      } catch (error) {
        console.error("Error loading doctor:", error);
      }
    };
    loadDoctor();
  }, []);
    useEffect(() => {
        if (departments.length > 0) {
            const fetchBookings = async () => {
                const counts = await Promise.all(departments.map(department => loadBooking(department.id)));
                setBookingCounts(counts);

                const xValues = departments.map(department => department.name);
                const yValues = counts;
                const barColors = [
                    "#b91d47",
                    "#00aba9",
                    "#2b5797",
                    "#e8c3b9",
                    "#1e7145"
                ];

                const ctx2 = document.getElementById("myChart");

                new window.Chart(ctx2, {
                    type: "pie",
                    data: {
                        labels: xValues,
                        datasets: [{
                            backgroundColor: barColors,
                            data: yValues
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: "The chart shows the departments"
                        }
                    }
                });
            };
            fetchBookings();
        }
    }, [departments]);

    const [totalExpense, setTotalExpense] = useState(0);

    const loadResults = async () => {
        try {
            const rs = await api.get(url.RESULT.LIST);
            const results = rs.data;

            // Tính tổng tất cả số tiền của expense
            const totalExpense = results.reduce((total, result) => {
                return total + (result.expense || 0); // Chú ý: Giả sử `expense` là số tiền trong mỗi `result`
            }, 0);

            console.log(`Total expense: ${totalExpense}`);
            return totalExpense;
        } catch (error) {
            console.error("Error loading results:", error);
            return 0;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const total = await loadResults();
            setTotalExpense(total);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchMonthlyBookings = async () => {
            try {
                const xValues = Array.from({ length: 12 }, (_, i) => i + 1);
                const responses = await Promise.all(xValues.map(month => api.get(`${url.BOOKING.GETBYMONTH}?month=${month}`)));
                const yValues = responses.map(response => response.data.length);
                const barColors = ["red", "green", "blue", "orange", "brown"];

                const ctx = document.getElementById("myChart2");

                new window.Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: xValues,
                        datasets: [{
                            backgroundColor: barColors,
                            data: yValues
                        }]
                    },
                    options: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: "Bookings by Month for Current Year"
                        }
                    }
                });
            } catch (error) {
                console.error("Error fetching monthly bookings data:", error);
            }
        };

        fetchMonthlyBookings();
    }, []);



    return (
        <div class="page-wrapper" style={{ textAlign: "justify" }}>
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fe fe-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{listbooking.length}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Total Booking</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fe fe-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{patients.length}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Patients</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fe fe-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{doctors.length}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Doctor</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-warning border-warning">
                                        <i class="fe fe-folder"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>{totalExpense}</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Revenue</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ display: "flex" }}>
                    <div class="card" style={{ flex: "1", margin: "10px" }}>
                        <div class="card-body">
                            <canvas id="myChart" style={{ width: "100%", maxWidth: "600px" }}></canvas>
                        </div>
                    </div>
                    <div class="card" style={{ flex: "1", margin: "10px" }}>
                        <div class="card-body">
                            <canvas id="myChart2" style={{ width: "100%", maxWidth: "600px" }}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbroad;