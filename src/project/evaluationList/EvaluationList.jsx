import React from "react";
import useEvaluationList from "./useEvaluationList";
import ProjectTitle from "./ProjectTitle";
import ProjectBar from "./ProjectBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectInfo from "./ProjectInfo";
import ControlledAccordions from "./ControlledAccordions";

const EvaluationList = () => {
    const { evaluationList, btnClickHandler, selectRow, 
            btnActivated, projectParticipants,
            projectTitle, endDate, customer }  = useEvaluationList();
    return (
        <div>
            <Box>
                <ProjectTitle title={{ projectTitle: projectTitle}}/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ProjectBar />
                    </Grid>
                    <Grid item xs={6}>
                        <ProjectInfo info={{ endDate: endDate, customer: customer }} />
                    </Grid>
                </Grid>
            
            </Box>
            <ControlledAccordions   
                list={evaluationList}
                selectRow={selectRow} 
                btnClickHandler={btnClickHandler}
                btnActivated={btnActivated}
                projectParticipants={projectParticipants} />
        </div>
    );
        
    
}

export default EvaluationList;