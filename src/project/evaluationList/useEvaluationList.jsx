import { useEffect, useState } from "react";
import { getProjectPMEvaluation } from "../../common/api";
import { useNavigate, useParams } from "react-router-dom";

const useEvaluationList = () => {
    const naviage = useNavigate();
    const params = useParams();
    const [evaluationList, setEvaluationList] = useState([]);
    const [selectedEmployee, setRow] = useState('');
    const [btnActivated, setBtn] = useState(false);

    useEffect(() => {
        async function fetch () {
            const list = await getProjectPMEvaluation('박예연', params.project_id);
            setEvaluationList(list);
        }
        fetch();
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
    }
}

export default useEvaluationList;