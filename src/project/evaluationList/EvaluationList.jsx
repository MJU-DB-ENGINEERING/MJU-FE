import React from "react";
import useEvaluationList from "./useEvaluationList";
import EvaluationBox from "./EvaluationBox";

const EvaluationList = (props) => {
    console.log(props);
    const { evaluationList }  = useEvaluationList();
    return (
        <div>
            <EvaluationBox list={evaluationList} />
        </div>
    );
        
    
}

export default EvaluationList;