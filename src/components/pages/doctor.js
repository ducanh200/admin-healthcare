import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { toast } from "react-toastify";

function Doctor() {
    const [departments, setDepartments] = useState([]);
  useEffect(() => {
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


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [departmentId, setDepartmentId] = useState("");
    const createDoctor = async (name, email,password, thumbnail,phonenumber,departmentId) => {
      try {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('thumbnail', thumbnail);
        formData.append('phonenumber', phonenumber);
        formData.append('departmentId', departmentId);



        const response = await api.post(url.DOCTOR.CREATE, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return response.data;
      } catch (error) {
        console.error("Error creating doctor:", error);
        throw error;
      }
    };
    const handlSaveDoctor = async () => {
      try {
        let res = await createDoctor(name,email,password,thumbnail,phonenumber,departmentId);
        setName('');
        setEmail('');
        setPassword('');
        setThumbnail(null);
        setPhoneNumber('');
        setDepartmentId('');
        toast.success('A doctor is created succeed!');
      } catch (error) {
        console.error("Error create doctor:", error);
        toast.error('An error occurred while create the doctor.');
      }
    };

    const [dataDoctor, setDataDoctor] = useState({});
    const handlData = (doctor) => {
      setDataDoctor(doctor);
    }


    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editThumbnail, setEditThumbnail] = useState("");
    const [editPhonenumber, setEditPhoneNumber] = useState("");
    const [editDepartmentId, setEditDepartmentId] = useState("");

    const editDoctor = async (editName, editEmail,editThumbnail,editPhonenumber,editDepartmentId) => {
      try {
        const formData = new FormData();
        formData.append('name', editName);
        formData.append('email', editEmail);
        formData.append('thumbnail', editThumbnail);
        formData.append('phonenumber', editPhonenumber);
        formData.append('departmentId', editDepartmentId);
        const response = await api.put(url.DOCTOR.EDIT + `${dataDoctor.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        return response.data;
      } catch (error) {
        console.error("Error updating doctor:", error);
        throw error;
      }
    };
    const handlEditDoctor = async () => {
      try {
        let res = await editDoctor(editName, editEmail, editThumbnail,editPhonenumber,editDepartmentId);
        setName('');
        setEmail('');
        setThumbnail(null);
        setPhoneNumber('');
        setDepartmentId('');

        toast.success('A doctor is updated succeed!');
      } catch (error) {

        console.error("Error update doctor:", error);
        toast.error('An error ');
      }
    };

    useEffect(() => {
      setEditName(dataDoctor.name);
      setEditEmail(dataDoctor.email);
      setEditThumbnail(dataDoctor.thumbnail);
      setEditPhoneNumber(dataDoctor.phonenumber);
      setEditDepartmentId(dataDoctor.departmentId);

    }, [dataDoctor])



    const DeleteDoctor = (id) => {
      return api.delete(url.DOCTOR.DELETE + `${id}`);
    }
    const ConfirmDelete = async () => {
      try {
        const res = await DeleteDoctor(dataDoctor.id);

        if (res.status === 200) {
          toast.success('Delete Success');

        } else {
          toast.error('An error occurred while deleting the doctor');
        }
      } catch (error) {
        toast.error("An erroer!");
        console.error('Error deleting doctor:', error);
      }
    }

    return (
        <>
        <div class="page-wrapper" style={{ textAlign: "justify" }}>
            <div class="content container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-bory">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                        <h3>List Doctor</h3>
                                    </div>
                                    <div style={{ marginTop: "15px", textAlign: "right", marginRight: "30px" }}>
                                        <a href="#Add_Specialities_details" data-bs-toggle="modal" class="btn btn-primary float-end mt-2">Add Doctor</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body" style={{ paddingTop: "10px" }}>
                                <div class="table-responsive">
                                    <table class=" table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Doctor Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Department</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {doctors.map((doctor)=>(
                                        <tbody>
                                            <tr>
                                                <td>{doctor.id}</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src={doctor.thumbnail} alt="User Image" /></a>
                                                        <a href="profile.html">{doctor.name}</a>
                                                    </h2>
                                                </td>
                                                <td>{doctor.email}</td>
                                                <td>{doctor.phonenumber}</td>
                                                <td><h2 class="table-avatar">
<a  class="avatar avatar-sm me-2">
<img class="avatar-img" src={doctor.department.thumbnail} alt="Speciality"/>
</a>
{doctor.department.name}
</h2></td>
                                                <td>
                                                <div class="actions">
                                                <a class="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_specialities_details" onClick={() => handlData(doctor)}>
                                                <i class="fe fe-pencil"></i> Edit
                                                </a>

                                                <a data-bs-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light" style={{marginLeft:"10px"}} onClick={() => handlData(doctor)}>
                                                <i class="fe fe-trash"></i> Delete
                                                </a>
                                                </div>
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
        <div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Doctor</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Name</label>
                      <input type="text" class="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="mb-2">Email</label>
                      <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="mb-2">Phone Number</label>
                      <input type="number" class="form-control" value={phonenumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Password</label>
                      <input type="password" class="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                  </div>

                  <div class=" col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Avatar</label><br />
                      <input type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
                    </div>
                  </div>
                  <div class="col-sm-12">
      <div class="mb-3">
        <label class="mb-2">Department</label>
        <select class="form-select" value={departmentId} onChange={(event) => setDepartmentId(event.target.value)}>
          <option value="">Select Department</option>
          {departments.map(department => (
            <option key={department.id} value={department.id}>{department.name}</option>
          ))}
        </select>
      </div>
    </div>
                </div>
                <button type="submit" class="btn btn-primary w-100"  onClick={() => handlSaveDoctor()}>Add Doctor</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Doctor</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Name</label>
                      <input type="text" class="form-control" value={editName} onChange={(event) => setEditName(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="mb-2">Email</label>
                      <input type="email" class="form-control" value={editEmail} onChange={(event) => setEditEmail(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="mb-2">Phone Number</label>
                      <input type="number" class="form-control" value={editPhonenumber} onChange={(event) => setEditPhoneNumber(event.target.value)} />
                    </div>
                  </div>
                  <div class=" col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Avatar</label><br />
                      <input type="file" onChange={(event) => setEditThumbnail(event.target.files[0])} />
                    </div>
                  </div>
                  <div class="col-sm-12">
      <div class="mb-3">
        <label class="mb-2">Department</label>
        <select class="form-select" value={editDepartmentId} onChange={(event) => setEditDepartmentId(event.target.value)}>
          <option value="">Select Department</option>
          {departments.map(department => (
            <option key={department.id} value={department.id}>{department.name}</option>
          ))}
        </select>
      </div>
    </div>
                </div>
                <button type="submit" class="btn btn-primary w-100"  onClick={() => handlEditDoctor()}>Edit Doctor</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="form-content p-2">
                <h4 class="modal-title">Delete</h4>
                <p class="mb-4">Are you sure want to delete?</p>
                <button type="button" class="btn btn-danger me-2" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => ConfirmDelete()}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Doctor;