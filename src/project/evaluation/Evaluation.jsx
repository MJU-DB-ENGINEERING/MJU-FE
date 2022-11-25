import React from "react";
import EvaluationInputBox from "./EvaluationInputBox";
import usePmEvaluation from "./usePmEvaluation";

const Evaluation = () => {
    const { projectId, evaluator, evaluated } = usePmEvaluation();
    return (
        <>
            <EvaluationInputBox data={{
                "evaluated": evaluated,
                "evaluator": evaluator,
                "projectId": projectId
            }} />
        </>
    );

}

export default Evaluation;