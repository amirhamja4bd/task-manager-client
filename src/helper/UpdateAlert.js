import Swal from "sweetalert2";
import {updateStatusRequest} from "../APIRequest/APIRequest";

export function updateToDO(id,status){
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {New: 'New', Completed: 'Completed', Progress: 'Progress', Canceled: 'Canceled'},
        inputValue:status,
    }).then((result)=>{
        console.log(result);
        if(result.isConfirmed){
            return updateStatusRequest(id, result.value).then((res)=>{
                return res;
            })
        }
    })
}