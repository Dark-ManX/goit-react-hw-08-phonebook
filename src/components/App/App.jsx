import "components/App/App.css";
import PrivateRoutes from "components/PrivatRoutes/PrivatRoutes";
import AppBar from 'pages/AppBar';
import LogOut from "pages/LogOut";
import Main from "pages/Main";
import Loading from "pages/Loading";
import { lazy, Suspense } from 'react';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { useGetCurrentUserQuery } from 'redux/authAPI';

const Registration = lazy(() => import('pages/RegistrationForm'));
const LogIn = lazy(() => import('pages/LoginForm'));
const Phonebook = lazy(() => import('pages/Contacts'));
const NotFoundElement = lazy(() => import('pages/NotFound'));

const App = () => {

  const {token} = useSelector(state => state.auth);

  useGetCurrentUserQuery(null, {
    skip: !token,
  });
  
  return (
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<AppBar />} >
          <Route index element={<Main/>} />
          <Route path='register' element={<Registration />} />
          <Route path='login' element={<LogIn />} />
          <Route path='/' element={<PrivateRoutes />} >
            <Route path='contacts' element={<Phonebook />} />
            <Route path='logout' element={<LogOut/>} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundElement/>} />
      </Routes>
    </Suspense>

  )
  
}

export default App;
