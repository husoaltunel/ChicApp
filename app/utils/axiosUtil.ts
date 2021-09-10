import axios from "axios";
import {API_URL} from "@env";
export function axiosPost(path : string,param :any) {
    return axios.post(API_URL + path,param,{
        headers : {
            'Content-Type': 'application/json',
            "key" : "1c1fe83de6f9f077008fb22294a320b0"
        }
    })
}