import { useEffect, useState } from "react";
import { getProjectDetail, getProjectPMEvaluation } from "../../common/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const useEvaluationList = () => {
    const naviage = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [projectTitle, setProjectTitle] = useState('');
    const [endDate, setEndDate] = useState('');
    const [customer, setCustomer] = useState('');
    const [evaluationList, setEvaluationList] = useState([]);
    const [projectParticipants, setProjectParticipants] = useState([]);
    const [selectedEmployee, setRow] = useState('');
    const [btnActivated, setBtn] = useState(false);

    useEffect(() => {
        async function fetch () {
            const list = await getProjectPMEvaluation('박예연', params.project_id);
            setEvaluationList(list);

            const list2 = await getProjectDetail('써머프로젝트2');
            setProjectParticipants(list2);
        }
        fetch();

        setProjectTitle(location.state.projectTitle);
        setEndDate(location.state.endDate);
        setCustomer(location.state.customer);
    }, []);

    const selectRow = (row) => {
        setRow(row);
        setBtn(row !== '');
    }

    const btnClickHandler = () => {
        naviage('/project/' + params.project_id + '/evaluation/pm', {
            state: {
                'evaluator': '박예연',
                'evaluated': selectedEmployee,
            }
        });
    }

    return {
        evaluationList,
        btnClickHandler,
        selectRow,
        btnActivated,
        projectParticipants,
        projectTitle,
        endDate,
        customer
    }
}

export default useEvaluationList;