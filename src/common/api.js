
const HOST_URL = 'https://virtserver.swaggerhub.com/BEMELON/MJU_DB/1.0.0/';

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
    }).then((response) => response.json());

    console.log(res);
    return res;
}

export const searchProject = async (projectName) => {
    const res = await fetch(HOST_URL + 'v1/search/project/' + projectName, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

    console.log(res);
    return res;
}

export const getProjectDetail = async (projectName) => {
    const res = await fetch(HOST_URL + 'v1/view/' + projectName + '/detail/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => response.json());

    console.log(res);
    return res;
}

export const updateProjectPMEvaluation = async (props) => {
    const { businessComment, businessRate, 
      communicationComment, communicationRate,
      evaluated, evaluator,
      projectId } = props;

    const res = await fetch(HOST_URL + 'v1/evaluation/pm', {
        method: 'POST',
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

    console.log(res);
    return res;
}

export const getProjectPMEvaluation = async (props) => {
    const {evaluatedName, evaluatorName, id } = props;

    const res = fetch(HOST_URL + 'v1/view/evaluation', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            'evaluatedName': evaluatedName,
            'evaluatorName': evaluatorName,
            'id': id,
        }
    }).then((res) => res.json());

    console.log(res);
    return (res);
}