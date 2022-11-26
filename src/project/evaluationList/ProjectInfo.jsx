/* eslint-disable react/prop-types */
import React from "react";
import Paper from '@mui/material/Paper';
import { Typography, Grid } from "@mui/material";


const ProjectInfo = (props) => {
    const { endDate, customer } = props.info;

    return (
         <Grid  container spacing={2} direction="column">
            <Grid item  sx={{ mt: 4 }}>
                <Paper elevation={8} sx={{padding: 2}} variant="outlined" style={{width : 400}}>
                    <Typography variant="h4" sx={{ my : 2}}>
                        고객사
                    </Typography>
                    <Typography variant="h6">
                        {customer}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={8}  sx={{padding: 2}} variant="outlined" style={{width : 400}}>
                    <Typography variant="h4" sx={{ my : 2}}>
                        마감일
                    </Typography>
                    <Typography variant="h6">
                        {endDate}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ProjectInfo;