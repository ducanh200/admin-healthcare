const url = {
    BASE_URL: "http://localhost:8080/api/v3",
    DEPARTMENT:{
        LIST: "/departments",
        CREATE: "/departments",
    },
    ADMIN:{
        GET:"/admin",
    },
    MEDICINE:{
        LIST: "/medicine",
        CREATE: "/medicine",
        EDIT: "/medicine",
        DELETE: "/medicine",
        GET:"/medicine/get-by-id"
    }
   
}
export default url;