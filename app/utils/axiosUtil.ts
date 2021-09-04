import axios from "axios";
import {API_URL} from "@env";
export function axiosGet(path : string,param :any) {
    return axios.get(API_URL + path,
        {
            headers : {
                "key" : "1c1fe83de6f9f077008fb22294a320b0"
            },
            params: param
        })
}