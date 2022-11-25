import { useLocation, useParams } from "react-router-dom";

const usePmEvaluation = () => {
    const params = useParams();
    const projectId = params.project_id;
    const location = useLocation();
    const {evaluator, evaluated } = location.state;


    return {
        projectId,
        evaluator,
        evaluated
    }
}

export default usePmEvaluation;