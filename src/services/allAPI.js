import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";
 

// uploading 
export const uploadDetails = async (body)=>{
    return await commonAPI("POST",`${serverURL}/property`,body)
}
 
// getAll
export const getDetails = async ()=>{
    return await commonAPI("GET",`${serverURL}/property`,"")
}
