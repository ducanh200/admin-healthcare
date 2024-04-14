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
    },
    BOOKING:{
        LIST: "/bookings",
        STATUS_CHANGE: "/bookings/updateStatus/"
    },
    PATIENT:{
       GETID: "/patients"
    }
   
}
export default url;