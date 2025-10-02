import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { useNavigate } from "react-router";

const axiosApi = axios.create({
    baseURL: `http://localhost:9000`
});

const ApiCustomHook = () => {
    const {user,handleLogout} = useContext(AuthContext);
    const navigate = useNavigate();


    // ! why this one is used
    axiosApi.interceptors.request.use(
        (config) => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`;
            return config;
        },
        (error) =>{
            return Promise.reject(error);
        }
    );

    axiosApi.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) =>{
            console.log("Inside response interceptor", error);

            const errorStatus = error.status;

            if(errorStatus === 401){
                handleLogout()
                .then(() => {
                    navigate('/');
                }) 
                .catch(() => {})
            }
            else if  (errorStatus === 403){
                navigate("/login");
            }
        }
    )

    return axiosApi
};

export default ApiCustomHook;

