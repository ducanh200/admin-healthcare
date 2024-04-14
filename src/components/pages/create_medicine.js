import React, { useState } from 'react';

function Create_medicine() {
    const [medicineName, setMedicineName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/v3/medicine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: medicineName }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create medicine');
            }
            setMedicineName(''); 
            window.location.href = '/medicine';
        })
        .catch(error => console.error('Error creating medicine:', error));
    };

    const handleChange = (event) => {
        setMedicineName(event.target.value);
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
                                <div className="card-body" style={{ paddingBottom: "0px", marginLeft:"-100px"}}>
                                    <h2>Create Medicine</h2>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm">
                                        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="mb-3">
                                                    <label className="mb-2" htmlFor="validationCustom01">Name Medicine</label>
                                                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value={medicineName} onChange={handleChange} required />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit" style={{ float: "right" }}>Create Medicine</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create_medicine;