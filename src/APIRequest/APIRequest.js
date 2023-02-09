import axios from "axios";
import { toast } from "react-hot-toast";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/task-slice";
import {SetSummary} from "../redux/state-slice/summary-slice";
import {SetProfile} from "../redux/state-slice/profile-slice";
import { setEmail, setOTP, getToken, setToken, setUserDetails } from "../helper/SessionHelper";


const BaseURL="http://localhost:5000/api/v1"
const AxiosHeader={headers:{"token":getToken()}}

// Registration
export function registrationRequest(email,firstName,lastName,mobile,password,photo){
    
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/registration";
    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
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
        store.dispatch(HideLoader())
        toast.error("Something Went Wrong 3")
        return false;
    })
}

// Login
export function loginRequest(email,password){

    store.dispatch(ShowLoader())

    let URL=BaseURL+"/login";
    let PostBody={"email":email,"password":password}
    return axios.post(URL,PostBody).then((res)=>{
        debugger;
        store.dispatch(HideLoader())
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            toast.success("Login Success")
            return true;
        }
        else{
            toast.error("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        //UnAuthorizeRequest(err);
        return false;
    });
}

// Create Task
export function newTaskRequest(title,description){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/create-task";
    let PostBody={"title":title,"description":description,status:"New"}
    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            toast.success("New Task Created")
            return true;
        }
        else{
            toast.error("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    })
}

// Task List By Status
export function TaskListByStatus(Status){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/list-task-status/"+Status;
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(Status==="New"){
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if(Status==="Completed"){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status==="Canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
            else if(Status==="Progress"){
                store.dispatch(SetProgressTask(res.data['data']))
            }
        }
        else{
            toast.error("Something Went Wrong")
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Summary Request
export function summaryRequest(){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/task-status-count";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetSummary(res.data['data']))
        }
        else{
            toast.error("Something Went Wrong")
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Delete Request
export function deleteRequest(id){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/delete-task/"+id;
    return axios.delete(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            toast.success("Delete Successful")
            return true;
        }
        else{
            toast.error("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Update Request
export function updateStatusRequest(id,status){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/update-task-status/"+id+"/"+status;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            toast.success("Status Updated")
            return true;
        }
        else{
            toast.error("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong catch")
        store.dispatch(HideLoader())
        return false;
    });
}

// Get Profile Details
export function GetProfileDetails(){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/profile-details";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            toast.error("Something Went Wrong")
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

// Profile Update
export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/profile-update";
    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    let UserDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}
    return axios.put(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            toast.success("Profile Update Success")
            setUserDetails(UserDetails)
            return true;
        }
        else{
            toast.error("Something Went Wrong")
            return  false;
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

// Password Recovery
export function RecoverVerifyEmailRequest(email){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/RecoverVerifyEmail/"+email;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                toast.error("No user found");
                return false;
            }
            else{
                setEmail(email)
                toast.success("A 6 Digit verification code has been sent to your email address. ");
                return true;
            }
        }
        else{
            toast.error("Something Went Wrong");
            return false;
        }
    }).catch((err)=>{
        toast.error("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}