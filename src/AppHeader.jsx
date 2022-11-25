import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
    <ul>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/project/search"><li>Project Search</li></Link>
        <Link to="/project/:project_id"><li>Project Info</li></Link>
        <Link to="/project/:project_id/evaluation"><li>Project Eval list</li></Link>
        <Link to="/project/:project_id/evaluation/pm"><li>Project PM Eval</li></Link>
    </ul>
)

export default AppHeader;