import React, {Fragment, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { summaryRequest } from '../../APIRequest/APIRequest';

const Dashboard = () => {

    useEffect(()=>{
        summaryRequest();
    },[])

    const SummaryList = useSelector((state) => state.summary.value)

    return (
        <Fragment>
            {/* <form className="col-12 ms-auto col-md-6 col-lg-4 px-2 my-2">
                <div className="row">
                    <div className="col-8">
                        <input className="form-control form-control-sm w-100"/>
                    </div>
                    <div className="col-4">
                         <button className="btn btn-sm w-100 my-bg-primary"  >Search</button>
                    </div>
                </div>
             </form> */}
            
            <div className="container">
                <div className="row">
                    {SummaryList.map((item, i)=>(
                        <div  className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                            <div className="card h-100 shadow border-white">
                                <div className="card-body">
                                    <h5 className="animated fadeInUp">Total {item._id} </h5>
                                    <h6 className="text-secondary animated fadeInUp">{item.sum}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;