import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { toast } from "react-toastify";
function Medicine() {
    const [medicines, setMedicine] = useState([]);

  useEffect(() => {
    const loadMedicine = async () => {
      try {
        const rs = await api.get(url.MEDICINE.LIST);
        const sortedMedicines = rs.data.sort((a, b) => a.id - b.id);
        setMedicine(rs.data);
      } catch (error) {
        console.error("Error loading medicine:", error);
      }
    };
    loadMedicine();
  }, []);

  const [name, setName] = useState("");
  const createMedicine = async (name) => {
    try {
      const requestData = {
        name: name
      };
  
      const response = await api.post(url.MEDICINE.CREATE, requestData);
  
      return response.data;
    } catch (error) {
      console.error("Error creating medicine:", error);
      throw error;
    }
  };

  const handlSaveMedicine = async () => {
    try {
      let res = await createMedicine(name);
      setName('');
      toast.success('A medicine is created succeed!');
    } catch (error) {
      console.error("Error create medicine:", error);
      toast.error('An error occurred while create the medicine.');
    }
  };

  const [dataMedicine, setDataMedicine] = useState({});
  const handlData = (medicine) => {
    setDataMedicine(medicine);
  }

  const DeleteMedicine = (id) => {
    return api.delete(url.MEDICINE.DELETE + `${id}`);
  }
  const ConfirmDelete = async () => {
    try {
      const res = await DeleteMedicine(dataMedicine.id);

      if (res.status === 200) {
        toast.success('Delete Success');

      } else {
        toast.error('An error occurred while deleting the medicine');
      }
    } catch (error) {
      toast.error("An error!");
      console.error('Error deleting medicine:', error);
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
                                            <h3>List Medicine</h3>
                                        </div>
                                        <div style={{ marginTop: "15px", textAlign: "right", marginRight: "30px" }}>
                                            <a href="#Add_Medicine" data-bs-toggle="modal" class="btn btn-primary float-end mt-2">Add Medicine</a>
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
                                                                <a data-bs-toggle="modal" href="#edit_Medicine" class="btn btn-sm bg-success-light me-2">
                                                                    <i class="fe fe-pencil"></i> Edit
                                                                </a>
                                                                <a class="btn btn-sm bg-danger-light" data-bs-toggle="modal" href="#delete_modal">
                                                                    <i class="fe fe-trash"></i> Delete
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
            <div class="modal fade" id="Add_Medicine" aria-hidden="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Medicine</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="mb-2">Name</label>
                                            <input type="text" class="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100" onClick={() => handlSaveMedicine()}>Add Medicine</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="edit_Medicine" aria-hidden="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Medicine</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="mb-2">Name</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100" >Update Medicine</button>
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
    );
}

export default Medicine;
