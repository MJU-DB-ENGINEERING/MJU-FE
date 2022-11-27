
// const HOST_URL = 'http://13.125.105.3:50038/';
const HOST_URL = '/'; // for CORS

import { fetch } from 'cross-fetch';

export const doLogin = async (userId, userPw) => {
    const res = await fetch(HOST_URL + 'v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userId": userId,
            "userPw": userPw,
        }),
    });
    if (res.status == 200)
        return res.json();
    return undefined;
}

export const searchProject = async (projectName) => {
    const res = await fetch(HOST_URL + 'v1/search/project/' + projectName, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

    return res;
}

export const getProjectDetail = async (projectName) => {
    const res = await fetch(HOST_URL + 'v1/view/' + projectName + '/detail/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => response.json());

    return res;
}

export const updateProjectPMEvaluation = async (props) => {
    const { businessComment, businessRate, 
      communicationComment, communicationRate,
      evaluated, evaluator,
      projectId } = props;

    const res = await fetch(HOST_URL + 'v1/evaluation/pm/update', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'businessComment': businessComment,
            'businessRate': businessRate,
            'communicationComment': communicationComment,
            'communicationRate': communicationRate,
            'evaluated': evaluated,
            'evaluator': evaluator,
            'projectId': projectId,
        }),
    }).then((response) => response.json());

    return res;
}

export const getProjectPMEvaluation = async (evaluatorName, projectid) => {
    const res = fetch(HOST_URL + 'v1/view/evalutaion', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            'evaluatorName': evaluatorName,
            'projectId': projectid,
        })
    }).then((res) => res.json());

    return (res);
}

export const getCustomerName = (id) => {
    if (id == 2)
        return "LG CNS";
}