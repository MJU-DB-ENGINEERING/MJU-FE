import { useEffect, useState } from "react";
import { getProjectPMEvaluation } from "../../common/api";

const useEvaluationList = () => {
    const [evaluationList, setEvaluationList] = useState([]);

    useEffect(() => {
        async function fetch () {
            const list = await getProjectPMEvaluation('박예연', 7);
            setEvaluationList(list);
        }
        fetch();
    }, []);

    return {
        evaluationList,
    }
}

export default useEvaluationList;