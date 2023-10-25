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

// delete a Singleproperty
export const deleteProperty = async(id)=>{
   return await commonAPI("DELETE",`${serverURL}/property/${id}`,{})
}
// edit property
export const editProperty=async (id,body)=>{
    return await commonAPI("PUT",`${serverURL}/property/${id}`,body)
}
