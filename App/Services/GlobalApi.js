import axios from 'axios';

const BASE_URL="http://192.168.1.8:1337/api"

const API_KEY ="313ce79a9ab26315749be62251d8f0284a1de698560ab9943c44ba7d38c05bb6aeff0307e82025787f90bbbf39565af1e52cecc2a02d08746477d85caab5147cc72430abc8c31b8d7372c0a61428e2b1730f81ab797e64de4d4065e4eb1a129dc3c97e7baab460294ae997af5d8953705914cda60c99c85bc34d4d470b5fc40c"

const AxioInstance =axios.create({
    baseURL:BASE_URL,
    headers:{
    'Authorization':"Bearer "+ API_KEY 
}
})


const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*")

const getPremiumHospitals =() => AxioInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*")

const getHospitalsByCategory=(category)=>AxioInstance.get("/hospitals?filters[categories][Name][$in]="+category+"&populate=*")

const getDoctorsByCategory=(category)=>AxioInstance.get("/doctors?filters[categories][Name][$in]="+category+"&populate=*")

const getAllHospital=()=>AxioInstance.get("/hospitals?populate=*")

const getAllDoctor=()=>AxioInstance.get("/doctors?populate=*")

const getUserAppointments=(email)=>AxioInstance.get("/appointments?filters[email][$eq]="+email+"&populate=*")



const createAppointment=(data)=>AxioInstance.post(
    "/appointments",data
)
export default{
    getSlider,
    getCategories ,
    getPremiumHospitals,
    getHospitalsByCategory,
    createAppointment,
    getDoctorsByCategory,
    getAllHospital,
    getAllDoctor,
    getUserAppointments,

}