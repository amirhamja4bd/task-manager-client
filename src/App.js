import { Fragment } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import  { Toaster } from 'react-hot-toast';
import CreatePage from './page/CreatePage';
import DashboardPage from './page/DashboardPage';
import ProgressPage from './page/ProgressPage';
import ProfilePage from './page/ProfilePage';
import NewPage from './page/NewPage';
import CompletedPage from './page/CompletedPage';
import CanceledPage from './page/CanceledPage';
import Page404 from './page/Page404';
import FullscreenLoader from './components/masterLayout/FullscreenLoader';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { getToken } from './helper/SessionHelper';
import SendOTPPage from './page/AccountRecover/SendOTPPage';
import VerifyOTPPage from './page/AccountRecover/VerifyOTPPage';
import CreatePasswordPage from './page/AccountRecover/CreatePasswordPage';

const App = () => {
  if(getToken()){
    return (
      <Fragment>
        <BrowserRouter>
        <Toaster/>
          <Routes>
            <Route path='/' element={<DashboardPage/>} />
            <Route path='/create' element={<CreatePage/>} />
            <Route path='/all' element={<NewPage/>} />
            <Route path='/progress' element={<ProgressPage/>} />
            <Route path='/completed' element={<CompletedPage/>} />
            <Route path='/canceled' element={<CanceledPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
      </Fragment>
    );
  }
  else{
    return (
      <Fragment>
          <BrowserRouter>
          <Toaster/>
              <Routes>
                  <Route path="/" element={<Navigate to="/login" replace={true}/>}/>
                  <Route path='/login' element={<Login/>} />
                  <Route path='/registration' element={<Registration/>} />

                  <Route exact path="/send-otp" element={<SendOTPPage/>}/>
                  <Route exact path="/verify-otp" element={<VerifyOTPPage/>}/>
                  <Route exact path="/create-password" element={<CreatePasswordPage/>}/>

                  <Route path="*" element={<Page404/>}/>
              </Routes>
          </BrowserRouter>
          <FullscreenLoader/>
      </Fragment>
  );
  }
}

export default App;
