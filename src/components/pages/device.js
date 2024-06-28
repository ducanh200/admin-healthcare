import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { toast } from "react-toastify";
function Device() {
    const [devices, setDevice] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const loadDevice = async () => {
            try {
                const rs = await api.get(url.DEVICE.LIST);
                setDevice(rs.data);
            } catch (error) {
                console.error("Error loading device:", error);
            }
        };
        loadDevice();
        const loadDepartment = async () => {
            try {
                const rs = await api.get(url.DEPARTMENT.LIST);
                setDepartments(rs.data);
            } catch (error) {
                console.error("Error loading departments:", error);
            }
        };
        loadDepartment();
    }, []);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [expense, setExpense] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const createDevice = async (name, description, expense, departmentId) => {
        try {
            const requestData = {
                name: name,
                description: description,
                expense: expense,
                departmentId: departmentId
            };

            const response = await api.post(url.DEVICE.CREATE, requestData);

            return response.data;
        } catch (error) {
            console.error("Error creating device:", error);
            throw error;
        }
    };

    const handlSaveDevice = async () => {
        try {
            let res = await createDevice(name, description, expense, departmentId);
            setName('');
            setDescription('');
            setExpense('');
            setDepartmentId('');
            toast.success('A device is created succeed!');
            // Cập nhật lại danh sách thiết bị sau khi thêm thành công (tùy theo cách bạn đã thiết lập trong useEffect)
        } catch (error) {
            console.error("Error create device:", error);
            toast.error('An error occurred while create the device.');
        }
    };

    const [dataDevice, setDataDevice] = useState({});
    const handlData = (device) => {
        setDataDevice(device);
    }
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editExpense, setEditExpense] = useState("");
    const [editDepartmentId, setEditDepartmentId] = useState("");

    const editDevice = async (name, description, expense, departmentId) => {
        try {
            const requestData = {
                name: name,
                description: description,
                expense: expense,
                departmentId: departmentId

            };

            const response = await api.put(url.DEVICE.EDIT + `${dataDevice.id}`, requestData);

            return response.data;
        } catch (error) {
            console.error("Error updating device:", error);
            throw error;
        }
    };
    const handlEditDevice = async () => {
        try {
            let res = await editDevice(editName, editDescription, editExpense, editDepartmentId);
            setEditName('');
            setEditDescription('');
            setEditExpense('');
            setEditDepartmentId('');
            toast.success('A device is updated succeed!');
        } catch (error) {

            console.error("Error update device:", error);
            toast.error('An error .');
        }
    };

    useEffect(() => {
        setEditName(dataDevice.name);
    }, [dataDevice])

    const DeleteDevice = (id) => {
        return api.delete(url.DEVICE.DELETE + `${id}`);
    }
    const ConfirmDelete = async () => {
        try {
            const res = await DeleteDevice(dataDevice.id);

            if (res.status === 200) {
                toast.success('Delete Success');

            } else {
                toast.error('An error occurred while deleting the device');
            }
        } catch (error) {
            toast.error("An error!");
            console.error('Error deleting device:', error);
        }
    }
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
                                            <h3>List Device</h3>
                                        </div>
                                        <div style={{ marginTop: "15px", textAlign: "right", marginRight: "30px" }}>
                                            <a href="#Add_Device" data-bs-toggle="modal" class="btn btn-primary float-end mt-2">Add Device</a>
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
                                                    <th>Description</th>
                                                    <th>Expense</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {devices.map(device => (
                                                    <tr key={device.id}>
                                                        <td style={{ width: '10%' }}>{device.id}</td>
                                                        <td style={{ width: '20%' }}>{device.name}</td>
                                                        <td style={{ width: '20%' }}>{device.description}</td>
                                                        <td style={{ width: '20%' }}>$ {device.expense}</td>
                                                        <td style={{ width: '20%' }}>{device.department.name}</td>
                                                        <td style={{ width: '10%' }}>
                                                            <div className="actions">
                                                                <a data-bs-toggle="modal" href="#edit_Device" className="btn btn-sm bg-success-light me-2" onClick={() => handlData(device)}>
                                                                    <i className="fe fe-pencil"></i> Edit
                                                                </a>
                                                                <a className="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal" onClick={() => handlData(device)}>
                                                                    <i className="fe fe-trash"></i> Delete
                                                                </a>
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
            <div className="modal fade" id="Add_Device" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Device</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="mb-3">
                                            <label className="mb-2">Name</label>
                                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2">Description</label>
                                            <input type="text" className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2">Expense</label>
                                            <input type="text" className="form-control" value={expense} onChange={(event) => setExpense(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2">Department</label>
                                            <select className="form-select" value={dataDevice.department_id} onChange={(event) => setDepartmentId({ department_id: event.target.value })}>
                                                <option value="">Select Department</option>
                                                {departments.map(department => (
                                                    <option key={department.id} value={department.id}>{department.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" onClick={() => handlSaveDevice()}>Add Device</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="edit_Device" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Device</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="mb-3">
                                            <label className="mb-2" >Name</label>
                                            <input type="text" className="form-control" value={editName} onChange={(event) => setEditName(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2">Description</label>
                                            <input type="text" className="form-control" value={description} onChange={(event) => setEditDescription(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2">Expense</label>
                                            <input type="text" className="form-control" value={expense} onChange={(event) => setEditExpense(event.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2">Department</label>
                                            <select className="form-select" value={dataDevice.department_id} onChange={(event) => setEditDepartmentId({ department_id: event.target.value })}>
                                                <option value="">Select Department</option>
                                                {departments.map(department => (
                                                    <option key={department.id} value={department.id}>{department.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" onClick={() => handlEditDevice()}  >Update Device</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div class="modal-body">
                            <div className="form-content p-2">
                                <h4 className="modal-title">Delete</h4>
                                <p className="mb-4">Are you sure want to delete?</p>
                                <button type="button" className="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => ConfirmDelete()}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Device;