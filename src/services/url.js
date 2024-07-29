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
        STATUS_CHANGE:"/bookings/updateStatus/",
        GETBYDEPARTMENTID:"/bookings/getByDepartmentId/",
        GETBYMONTH:"/bookings/byMonthAndCurrentYear",
        GETBYDATE:"/bookings/dateRange"
    },
    PATIENT:{
        LIST:"/patients",
        GETBYID:"/patients"
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
        EDIT:"/doctors/",
        DELETE:"/doctors/",
        GETBYID:"/doctors",
        GETBYDEPARTMENTID:"/doctors/departmentId",
        },
    DEVICE:{
        LIST:"/devices",
        CREATE:"/devices",
        EDIT:"/devices/",
        DELETE:"/devices/"
    },
    RESULT:{
        LIST:"/results"
    }
    
    
   
}
export default url;