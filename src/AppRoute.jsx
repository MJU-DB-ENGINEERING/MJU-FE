import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Search from "./project/search/Search";
import Project from "./project/Project";
import EvaluationList from "./project/evaluationList/EvaluationList";
import Evaluation from "./project/evaluation/Evaluation";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/project/search" element= {<Search />} />
            <Route path="/project/:project_id" element= {<Project />} />
            <Route path="/project/:project_id/evaluation" element= {<EvaluationList />} />
            <Route path="/project/:project_id/evaluation/pm" element= {<Evaluation />} />
        </Routes>
    )
}

export default AppRoute;