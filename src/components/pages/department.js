import { useState, useEffect } from "react";
import api, { setAuthToken } from "../../services/api";
import url from "../../services/url";
import { toast } from "react-toastify";
function Department() {
  const [departments, setDepartments] = useState([]);
  const [token, setToken] = useState("");
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
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken"); 
    if (storedToken) {
      setToken(storedToken);
      console.log(storedToken);
    }
  }, []);

  const [name, setName] = useState("");
  const [expense, setExpense] = useState("");
  const [maxBooking, setMaxBooking] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const createDepartment = async (name, expense, maxBooking, description, thumbnail) => {
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('expense', expense);
      formData.append('maxBooking', maxBooking);
      formData.append('description', description);
      formData.append('thumbnail', thumbnail);



      const response = await api.post(url.DEPARTMENT.CREATE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error creating department:", error);
      throw error;
    }
  };
  const handlSaveDepartment = async () => {
    try {
      let res = await createDepartment(name, expense, maxBooking, description, thumbnail);
      setName('');
      setExpense('');
      setMaxBooking('');
      setDescription('');
      setThumbnail(null);
      toast.success('A department is created succeed!');
    } catch (error) {
      console.error("Error create department:", error);
      toast.error('An error occurred while create the department.');
    }
  };

  const [dataDepartment, setDataDepartment] = useState({});
  const handlData = (department) => {
    setDataDepartment(department);
  }


  const [editName, setEditName] = useState("");
  const [editExpense, setEditExpense] = useState("");
  const [editMaxBooking, setEditMaxBooking] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editThumbnail, setEditThumbnail] = useState("");

  const editDeparment = async (editName, editExpense, editMaxBooking, editDescription, editThumbnail) => {
    try {
      const formData = new FormData();
      formData.append('name', editName);
      formData.append('expense', editExpense);
      formData.append('maxBooking', editMaxBooking);
      formData.append('description', editDescription);
      formData.append('thumbnail', editThumbnail);
      const response = await api.put(url.DEPARTMENT.EDIT + `${dataDepartment.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error updating department:", error);
      throw error;
    }
  };
  const handlEditDepartment = async () => {
    try {
      let res = await editDeparment(editName, editExpense, editMaxBooking, editDescription, editThumbnail);
      setEditName('');
      setEditExpense('');
      setEditMaxBooking('');
      setEditDescription('');
      setEditThumbnail(null);

      toast.success('A department is updated succeed!');
    } catch (error) {

      console.error("Error update department:", error);
      toast.error('An error occurred while update the department.');
    }
  };

  useEffect(() => {
    setEditName(dataDepartment.name);
    setEditExpense(dataDepartment.expense);
    setEditMaxBooking(dataDepartment.maxBooking);
    setEditDescription(dataDepartment.description);
    setEditThumbnail(dataDepartment.thumbnail);
  }, [dataDepartment])



  const DeleteDepartment = (id) => {
    return api.delete(url.DEPARTMENT.DELETE + `${id}`);
  }
  const ConfirmDelete = async () => {
    try {
      const res = await DeleteDepartment(dataDepartment.id);

      if (res.status === 200) {
        toast.success('Delete Success');

      } else {
        toast.error('An error occurred while deleting the department');
      }
    } catch (error) {
      toast.error("An erroer!");
      console.error('Error deleting department:', error);
    }
  }
  return (
    <>
      <div class="page-wrapper">
        <div class="content container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
              <div class="card-bory">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                <h3>List Department</h3>
              </div>
              <div style={{ marginTop: "15px", textAlign: "right", marginRight: "30px" }}>
                <a href="#Add_Specialities_details" data-bs-toggle="modal" class="btn btn-primary float-end mt-2">Add Department</a>
              </div>
            </div>
          </div>
                <div class="card-body" style={{paddingTop:"10px"}}>
                  <div class="table-responsive">
                    <table class="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Department</th>
                          <th>Expense</th>
                          <th>Max Booking</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {departments.map((department) => (
                        <tbody>

                          <tr>
                            <td>{department.id}</td>
                            <td>
                              <h2 class="table-avatar">
                                <a href="profile.html" class="avatar avatar-sm me-2">
                                  <img class="avatar-img" src={department.thumbnail} alt="Speciality" />
                                </a>
                                <a href="profile.html">{department.name}</a>
                              </h2>
                            </td>
                            <td>{department.expense}$</td>
                            <td>{department.maxBooking}</td>
                            <td>{department.description}</td>
                            <td>
                              <div class="actions">
                                <a class="btn btn-sm bg-success-light me-2" data-bs-toggle="modal" href="#edit_specialities_details" onClick={() => handlData(department)}>
                                  <i class="fe fe-pencil"></i> Edit
                                </a>
                                <a data-bs-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light" onClick={() => handlData(department)} >
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
              <h5 class="modal-title">Add Department</h5>
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
                      <label class="mb-2">Expense</label>
                      <input type="number" class="form-control" value={expense} onChange={(event) => setExpense(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="mb-2">Max Booking</label>
                      <input type="number" class="form-control" value={maxBooking} onChange={(event) => setMaxBooking(event.target.value)} />
                    </div>
                  </div>
                  <div class=" col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Image</label><br />
                      <input type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Description</label>
                      <textarea type="label" class="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </div>
                  </div>

                </div>
                <button type="submit" class="btn btn-primary w-100" onClick={() => handlSaveDepartment()}>Add Department</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Department</h5>
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
                      <label class="mb-2">Expense</label>
                      <input type="number" class="form-control" value={editExpense} onChange={(event) => setEditExpense(event.target.value)} />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="mb-2">Max Booking</label>
                      <input type="number" class="form-control" value={editMaxBooking} onChange={(event) => setEditMaxBooking(event.target.value)} />
                    </div>
                  </div>
                  <div class=" col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Image</label><br />
                      <input type="file" onChange={(event) => setEditThumbnail(event.target.files[0])} />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="mb-2">Description</label>
                      <textarea type="label" class="form-control" value={editDescription} onChange={(event) => setEditDescription(event.target.value)} />
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary w-100" onClick={() => handlEditDepartment()} >Update Department</button>
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

export default Department;