import React from "react";
import useEvaluationList from "./useEvaluationList";
import EvaluationBox from "./EvaluationBox";
import { Button, Grid, Box } from "@mui/material"

const EvaluationList = () => {
    const { evaluationList, btnClickHandler, selectRow, btnActivated }  = useEvaluationList();
    return (
        <div>
            <Box>
                <EvaluationBox list={evaluationList} selectRow={selectRow} />
                <Grid container justifyContent="flex-end" >
                        <Button variant="outlined"
                                sx={{ padding: 1, margin: 2 }} 
                                onClick={btnClickHandler}
                                disabled={!btnActivated}>평가 시작</Button>
                </Grid>
            </Box>
            
        </div>
    );
        
    
}

export default EvaluationList;