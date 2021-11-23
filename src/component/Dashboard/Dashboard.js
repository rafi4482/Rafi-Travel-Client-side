import React from 'react';
import './Dashboard.css'
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import AddServices from '../AddServices/AddServices';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    let { path, url } = useRouteMatch()
    const { logOut } = useAuth()
    const { user } = useFirebase()
    



    return (
        <>

            <div className="dashboard-container container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="dashboard">
                            <h4>DASHBOARD</h4>

                            <Link to={`${url}/BookingList`} >
                                <li className="dashboard-menu">My Order </li>
                            </Link>

                            <div className="admin-dashboard mt-4">

                                <Link to={`${url}/addProduct`} >
                                    <li className="dashboard-menu">Add A Service</li>
                                </Link>

                                <Link to={`${url}/manageAllOrders`} >
                                    <li className="dashboard-menu">Manage All Orders</li>
                                </Link>
                                <Link to={`${url}/logout`} >
                                    <li className="dashboard-menu">LogOut</li>
                                </Link>



                            </div>
                        </div>
                    </div>
                    <div className="container col-md-7">
                        <Switch>

                            <Route path={`${path}/BookingList`}>
                                <MyOrder></MyOrder>
                            </Route>


                            <Route path={`${path}/addProduct`}>
                                <AddServices></AddServices>
                            </Route>

                            <Route path={`${path}/manageAllOrders`}>
                                <ManageOrder></ManageOrder>
                            </Route>

                            <Route path={`${path}/logout`}>
                                <h1>CLICK THE BUTTON BELOW IF YOU WANT TO SIGN OUT</h1>
                                <button style={{ margin: "5px", borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} onClick={logOut}>LogOut</button>                    </Route>
                        </Switch>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Dashboard;