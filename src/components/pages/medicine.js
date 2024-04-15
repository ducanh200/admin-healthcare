import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Medicine() {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v3/medicine')
            .then(response => response.json())
            .then(data => setMedicines(data))
            .catch(error => console.error('Error fetching medicines:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/v3/medicine/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                console.log(response); // Xem phản hồi từ API
                if (!response.ok) {
                    throw new Error('Failed to delete medicine');
                }
                setMedicines(prevMedicines => prevMedicines.filter(medicine => medicine.id !== id));
            })
            .catch(error => console.error('Error deleting medicine:', error));
    };


    return (
        <>
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div class="card-bory">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                        <h3>List Medicine</h3>
                                    </div>
                                    <div style={{ marginTop: "15px", textAlign: "right", marginRight: "30px" }}>
                                        <a href="#Add_Specialities_details" data-bs-toggle="modal" class="btn btn-primary float-end mt-2">Create Medicine</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {medicines.map(medicine => (
                                                <tr key={medicine.id}>
                                                    <td style={{ width: '10%' }}>{medicine.id}</td>
                                                    <td style={{ width: '60%' }}>{medicine.name}</td>
                                                    <td style={{ width: '30%' }}>
                                                        <div class="actions">
                                                            <Link to={`/edit_medicine/${medicine.id}`} class="btn btn-sm bg-success-light me-2">
                                                                <i class="fe fe-pencil"></i> Edit
                                                            </Link>
                                                            <button className="btn btn-sm bg-danger-light" onClick={() => handleDelete(medicine.id)}>
                                                                <i className="fe fe-trash"></i> Delete
                                                            </button>
                                                        </div>
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
        <div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title">Add Department</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
        <div class="row">
        

        <div class="col-sm-6">
        <div class="mb-3">
        <label class="mb-2">Max Booking</label>
        <input type="number" class="form-control"/>
        </div>
        </div>
        <div class=" col-sm-12">
        <div class="mb-3">
        <label class="mb-2">Image</label><br/>
        <input type="file"   />
        </div>
        </div>
        <div class="col-sm-12">
        <div class="mb-3">
        <label class="mb-2">Description</label>
        <textarea type="label" class="form-control" />
        </div>
        </div>
        
        </div>
        <button type="submit" class="btn btn-primary w-100" >Save</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Medicine;
