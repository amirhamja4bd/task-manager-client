import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import CreatePage from './page/CreatePage';
import DashboardPage from './page/DashboardPage';
import ProgressPage from './page/ProgressPage';
import ProfilePage from './page/ProfilePage';
import HomePage from './page/HomePage';
import NewPage from './page/NewPage';
import CompletedPage from './page/CompletedPage';
import CanceledPage from './page/CanceledPage';
import Page404 from './page/Page404';
import FullscreenLoader from './components/masterLayout/FullscreenLoader';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/home' element={<HomePage/>} />
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

export default App;
