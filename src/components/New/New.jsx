import React, {Fragment, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {AiOutlineCalendar, AiOutlineDelete,AiOutlineEdit} from "react-icons/ai";
import {useSelector} from "react-redux";
import {TaskListByStatus} from "../../APIRequest/APIRequest";
import moment from "moment";
import { DeleteToDO } from '../../helper/DeleteAlert';
import {updateToDO} from "../../helper/UpdateAlert";

const New = () => {

    useEffect(()=>{
        TaskListByStatus("New");
    },[])

    //Delete Task
    const DeleteItem=(id)=>{
        DeleteToDO(id).then((result)=>{
            if(result===true){
                TaskListByStatus("New");
            }
        })
    }

    // Status Update
    const StatusChangeItem=(id,status)=>{
        updateToDO(id, status).then((result)=>{
            if(result===true){
                TaskListByStatus("New");
            }
        })
    }

    const NewList = useSelector((state) => state.task.New)


    return (
        <Fragment>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>New Task</h5>
                    </div>
                    {/* <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control form-control-sm w-100"/>
                            </div>
                            <div className="col-4">
                                <button className="btn my-bg-primary btn-sm w-100" >Search</button>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="row p-0 m-0">
                    {NewList.map((item, i)=>(
                        <div  key={i.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                            <div className="card h-100 shadow border-white">
                                <div className="card-body">
                                    <h6 className="animated fadeInUp">{item.title}</h6>
                                    <p className="animated fadeInUp">{item.description}</p>
                                     <p className="m-0 animated fadeInUp p-0">
                                        <AiOutlineCalendar/>  {item.createdAt}
                                        {moment(item.createdAt).format('ll')}
                                        <a onClick={StatusChangeItem.bind(this,item._id,item.status)}  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteItem.bind(this,item._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className=" btn badge bg-primary float-end text-white">{item.status}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Fragment>
    );
};

export default New;