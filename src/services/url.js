const url = {
    BASE_URL: "http://localhost:8080/api/v3",
    DEPARTMENT:{
        LIST: "/departments",
        CREATE: "/departments",
        EDIT:"/departments/",
        DELETE:"/departments/"
    },
    ADMIN:{
        GET:"/admin",
        LOGIN:"/admin/login",
        REGISTER:"/admin/register",
        PROFILE:"/admin/profile"
    },
    BOOKING:{
        LIST:"/bookings",
        STATUS_CHANGE:"/bookings/updateStatus/"
    },
    PATIENT:{
        LIST:"/patients",
        GET:"/patients/getbyid"
    },
    MEDICINE:{
        LIST: "/medicine",
        CREATE: "/medicine",
        EDIT:"/medicine/",
        DELETE:"/medicine/"
    },
    DOCTOR:{
        LIST:"/doctors",
        CREATE:"/doctors",
        EDIT:"/doctors",
        GETBYID:"/doctors",
        GETBYDEPARTMENTID:"/doctors/departmentId",
        DELETE:"/doctors",
        
    }
    
   
}
export default url;