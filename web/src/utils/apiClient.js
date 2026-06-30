import axios from 'axios';
import toast from 'react-hot-toast';
const apiClient = axios.create({
    baseURL:'http://localhost:3002/api',
    withCredentials: true,
});

apiClient.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        if (error.response && error.response.status === 429) {
            const retrySeconds = error.response.data.retryAfterSeconds;
            toast.error(`Whoa, slow down! Please wait ${retrySeconds} seconds before trying again.`, {
                duration: 5000,
                position: 'top-center',
            });
        }
        else if(error.response && error.response.status === 401){
            toast.error("You are not authorised.");
            //Redirect to login page
        }
        else if(error.response && error.response.status === 500){
            toast.error("Something went wrong on our servers. We're looking into it!");
        }
        return Promise.reject(error);
    }
)

export default apiClient;
