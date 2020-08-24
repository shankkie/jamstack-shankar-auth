import React, {useEffect, useState} from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Profile from '../components/profile'
import Layout from '../components/layout';
import IdentityModal from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import RouteBase from '../components/route-base'
import RouteSecret from '../components/route-secret'
import RouteLogin from '../components/route-login';
import "@reach/tabs/styles.css";
import PrivateRoute from '../components/private-route';


const Dashboard = ({ location }) => {
    const [isVisible, setVisibility] = useState(false);
    useEffect( () => {
        if(location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true})
        }
    },[location.pathname])

    const showModal = () => setVisibility(true)

    return (
        <Layout>
            <Profile showModal={showModal}/>
            <Router>
                <PrivateRoute path="/dashboard/base" component={RouteBase} />
                <RouteLogin path="/dashboard/login" showModal={showModal} />
                <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
            </Router>
            <IdentityModal showDialog={isVisible} onCloseDialog={() => setVisibility(false)}/>
    </Layout>
    )
}

export default Dashboard;