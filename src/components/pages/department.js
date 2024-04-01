import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { toast } from "react-toastify";
import axios from "axios";
function Department(){
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



    const [name,setName] = useState("");
    const [expense,setExpense] = useState("");
    const [description,setDescription] = useState("");
    const [thumbnail,setThumbnail] = useState("");
    const createDepartment = async ( name,expense,description,thumbnail) => {
        try {
          const formData = new FormData();
      
          formData.append('name', name);
          formData.append('expense', expense);
          formData.append('description',description);
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
          let res = await createDepartment( name,expense,description, thumbnail);
          setName('');
          setExpense('');
          setDescription('');
          setThumbnail(null);
          
      
          toast.success('A department is created succeed!');
        } catch (error) {
          console.error("Error create department:", error);
          toast.error('An error occurred while create the department.');
        }
      };

      const [editName,setEditName] = useState("");
      const [editExpense,setEditExpense] = useState("");
      const [editDescription,setEditDescription] = useState("");
      const [editThumbnail,setEditThumbnail] = useState("");
      const [dataDepartmentEdit, setDataDepartmentEdit] = useState({});
      const handlEdit = (e)=>{
           setDataDepartmentEdit(e);
      }
      const editDeparment = async (id, editName,editExpense,editDescription,editThumbnail) => {
        try {
          const formData = new FormData();
          formData.append('id', id);
          formData.append('name', editName);
          formData.append('expense', editExpense);
          formData.append('description',editDescription);
          formData.append('thumbnail', editThumbnail); 
          
    
      
          const response = await axios.put(url.DEPARTMENT.EDIT, formData, {
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
      const handlEditDepartment= async () => {
        try {
          let res = await editDeparment( dataDepartmentEdit.id, editName,editExpense,editDescription,editThumbnail);
          setName('');
          setExpense('');
          setDescription('');
          setThumbnail(null);
    
          toast.success('A department is created succeed!');
        } catch (error) {
          console.error("Error create department:", error);
          toast.error('An error occurred while create the department.');
        }
      };
      useEffect(()=>{
            setEditName(dataDepartmentEdit.name);
            setEditExpense(dataDepartmentEdit.expense);
            setEditDescription(dataDepartmentEdit.description);
            setEditThumbnail(dataDepartmentEdit.thumbnail);
      },[dataDepartmentEdit])
    
    return(
<>
<div class="page-wrapper">
<div class="content container-fluid">
<div class="page-header">
<div class="row">
<div class="col-sm-7 col-auto">
<h3 class="page-title">Specialities</h3>
<ul class="breadcrumb">
<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
<li class="breadcrumb-item active">Specialities</li>
</ul>
</div>
<div class="col-sm-5 col">
<a href="#Add_Specialities_details" data-bs-toggle="modal" class="btn btn-primary float-end mt-2">Add</a>
</div>
</div>
</div>

<div class="row">
<div class="col-sm-12">
<div class="card">
<div class="card-body">
<div class="table-responsive">
<table class="datatable table table-hover table-center mb-0">
<thead>
<tr>
<th>ID</th>
<th>Department</th>
<th>Expense</th>
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
<img class="avatar-img" src={department.thumbnail} alt="Speciality"/>
</a>
<a href="profile.html">{department.name}</a>
</h2>
</td>
<td>{department.expense}$</td>
<td>{department.description}</td>
<td>
<div class="actions">
<a class="btn btn-sm bg-success-light" data-bs-toggle="modal" href="#edit_specialities_details" onClick={()=>handlEdit(department)}>
<i class="fe fe-pencil"></i> Edit
</a>
<a data-bs-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
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
<div class="col-sm-6">
<div class="mb-3">
<label class="mb-2">Name</label>
<input type="text" class="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
</div>
</div>
<div class="col-sm-6">
<div class="mb-3">
<label class="mb-2">Expense</label>
<input type="number" class="form-control" value={expense} onChange={(event) => setExpense(event.target.value)}/>
</div>
</div>
<div class=" col-sm-12">
<div class="mb-3">
<label class="mb-2">Image</label><br/>
<input type="file"  onChange={(event) => setThumbnail(event.target.files[0])} />
</div>
</div>
<div class="col-sm-12">
<div class="mb-3">
<label class="mb-2">Description</label>
<textarea type="label" class="form-control" value={description} onChange={(event) => setDescription(event.target.value)}/>
</div>
</div>

</div>
<button type="submit" class="btn btn-primary w-100" onClick={()=>handlSaveDepartment()}>Save</button>
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
<div class="col-sm-6">
<div class="mb-3">
<label class="mb-2">Name</label>
<input type="text" class="form-control" value={editName} onChange={(event) => setEditName(event.target.value)}/>
</div>
</div>
<div class="col-sm-6">
<div class="mb-3">
<label class="mb-2">Expense</label>
<input type="number" class="form-control" value={editExpense} onChange={(event) => setEditExpense(event.target.value)}/>
</div>
</div>
<div class=" col-sm-12">
<div class="mb-3">
<label class="mb-2">Image</label><br/>
<input type="file"  onChange={(event) => setEditThumbnail(event.target.files[0])} />
</div>
</div>
<div class="col-sm-12">
<div class="mb-3">
<label class="mb-2">Description</label>
<textarea type="label" class="form-control" value={editDescription} onChange={(event) => setEditDescription(event.target.value)}/>
</div>
</div>

</div>
<button type="submit" class="btn btn-primary w-100" onClick={()=>handlEditDepartment()}>Save</button>
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
<button type="button" class="btn btn-primary">Save </button>
<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>
</>
    )
}
export default Department;