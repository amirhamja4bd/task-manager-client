import axios from "axios";
import { toast } from "react-hot-toast";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {  setToken, setUserDetails } from "../helper/SessionHelper";


const BaseURL="http://localhost:5000/api/v1"

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

