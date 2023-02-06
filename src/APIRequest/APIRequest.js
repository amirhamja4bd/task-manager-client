import { Result } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
const BaseURL="http://localhost:5000/api/v1"


export function registrationRequest(email,firstName,lastName,mobile,password,photo){
    
    let URL=BaseURL+"/registration";
    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    return axios.post(URL,PostBody).then((res)=>{
        console.log(res)
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    toast.error("Email Already Exist")
                    return false;
                }
                else{
                    toast.error("Something Went Wrong 1")
                    return false;
                }
            }
            else {
                toast.success("Registration Success")
                return true;
            }
        }
        else{
            toast.error("Something Went Wrong 2")
            return  false;
        }
    }).catch((err)=>{
        console.log(err)
        toast.error("Something Went Wrong 3")
        return false;
    })
}













// export function registrationRequest(email,firstName,lastName,mobile,password){
    
//     let URL=BaseURL+"/registration";
//     let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password, photo:""}
//     return axios.post(URL,PostBody).then((res)=>{
        
//         if(res.status===200){
//             if(res.data['status']==="fail"){
//                 if(res.data['data']['keyPattern']['email']===1){
//                     toast.error("Email Already Exist")
//                     return false;
//                 }
//                 else{
//                     toast.error("Something Went Wrong")
//                     return false;
//                 }
//             }
//             else {
//                 toast.success("Registration Success")
//                 return true;
//             }
//         }
//         else{
//             toast.error("Something Went Wrong")
//             return  false;
//         }
//     }).catch((err)=>{
        
//         toast.error("Something Went Wrong")
        
//         return false;
//     })
// }