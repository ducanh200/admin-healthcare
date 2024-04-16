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
        LIST:"/bookings",
        STATUS_CHANGE:"/bookings/updateStatus/"
    },
    PATIENT:{
        LIST:"/patients"
    },
    MEDICINE:{
        LIST: "/medicine",
        CREATE: "/medicine",
        EDIT:"/medicine/",
        DELETE:"/medicine/"
    },
    DOCTOR:{
        LIST:"/doctors"
    }
   
}
export default url;