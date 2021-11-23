import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import AuthProvider from './context/AuthProvider';
import About from './component/About/About';
import Details from './component/Details/Details';
import PrivateRoute from './Private/PrivateRoute';
import Foot from './Foot/Foot';
import AddServices from './component/AddServices/AddServices';
import MyOrder from './component/MyOrder/MyOrder';
import ManageOrder from './component/ManageOrder/ManageOrder';
import Dashboard from './component/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route exact path='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>

            <PrivateRoute exact path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
            <Route exact path='/addServices'>
              <AddServices></AddServices>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>

            </Route>
          </Switch>
        </BrowserRouter>
        <Foot />
      </AuthProvider>

    </div>
  );
}

export default App;
