import { useEffect, useState } from "react";
import { getProjectPMEvaluation } from "../../common/api";
import { useParams } from "react-router-dom";

const useEvaluationList = () => {
    const params = useParams();
    console.log(params);
    const [evaluationList, setEvaluationList] = useState([]);

    useEffect(() => {
        async function fetch () {
            const list = await getProjectPMEvaluation('박예연', params.project_id);
            setEvaluationList(list);
        }
        fetch();
    }, []);

    return {
        evaluationList,
    }
}

export default useEvaluationList;