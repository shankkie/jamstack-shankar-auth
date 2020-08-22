import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>This app rules for some reason</h1>
        <p>Logo in to see the magic</p>
        <Link to="/dashboard">Go to Dashboard</Link>
        </Layout>
)