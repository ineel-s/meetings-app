import axios from 'axios';
import Config from '@/config';

const baseUrl = Config.baseUrl;

const signupUser = async () =>{
    const response = await axios.post(`${baseUrl}/api/auth/register`);
    return response.data;
}
const loginUser = async(credentials)=>{
    const response=await axios.post(`${baseUrl}/api/auth/login`,credentials,
    {
        headers:{
            'Content-Type':'application/json'
        },
    });
    console.log(response.data);
    return response.data;
}

export{
    signupUser,
    loginUser
} 