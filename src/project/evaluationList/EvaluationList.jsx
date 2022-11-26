import React from "react";
import useEvaluationList from "./useEvaluationList";
import ProjectTitle from "./ProjectTitle";
import ProjectBar from "./ProjectBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectInfo from "./ProjectInfo";
import ControlledAccordions from "./ControlledAccordions";

const EvaluationList = () => {
    const { evaluationList, btnClickHandler, selectRow, btnActivated, projectParticipants }  = useEvaluationList();
    return (
        <div>
            <Box>
                <ProjectTitle title={{ projectTitle: '써머프로젝트2'}}/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <ProjectBar />
                    </Grid>
                    <Grid item xs={6}>
                        <ProjectInfo info={{ endDate: '2022-12-05', customer: 'LG CNS' }} />
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