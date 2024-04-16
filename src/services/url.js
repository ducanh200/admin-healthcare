const url = {
    BASE_URL: "http://localhost:8080/api/v3",
    DEPARTMENT:{
        LIST: "/departments",
        CREATE: "/departments",
        UPDATE:"/departments"
    },
    ADMIN:{
        GET:"/admin",
    },
    DOCTOR:{
        LIST:"/doctors",
        CREATE:"/doctors",
        UPDATE:"/doctors",
        DELETE:"/doctors",
        CHANGEPASSWORD:"/doctors/changePasswordById",
        GETBYID:"/doctors",
        GETBYDEPARTMENTID:"/doctors/departmentId"
    }
   
}
export default url;