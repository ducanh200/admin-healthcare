import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Edit_medicine({ medicine }) {
    const [editedMedicine, setEditedMedicine] = useState({});

    useEffect(() => {
        setEditedMedicine(medicine);
    }, [medicine]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedMedicine(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/v3/medicine/${editedMedicine.id}`, editedMedicine);
            console.log('Medicine updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating medicine:', error);
        }
        window.location.href = '/medicine';
    };

    return (
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div style={{ display: "flex" }}>
                                <div className="card-body">
                                    <a className="btn btn-primary" href="/medicine">Back</a>
                                </div>
                                <div className="card-body" style={{ paddingBottom: "0px", marginLeft: "-100px" }}>
                                    <h2>Edit Medicine</h2>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm">
                                        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                                            <div className="row">
                                                <div className="mb-3">
                                                    <label className="mb-2" htmlFor="validationCustom01">Name Medicine</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="validationCustom01"
                                                        placeholder="First name"
                                                        name="name"
                                                        value={editedMedicine && editedMedicine.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit" style={{ float: "right" }}>Update Medicine</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit_medicine;
