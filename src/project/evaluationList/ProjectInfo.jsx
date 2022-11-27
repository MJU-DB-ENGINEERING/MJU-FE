/* eslint-disable react/prop-types */
import React from "react";
import Paper from '@mui/material/Paper';
import { Typography, Grid } from "@mui/material";
import { getCustomerName } from "../../common/api";

const ProjectInfo = (props) => {
    const { endDate, customer } = props.info;
    const customerName = getCustomerName(customer);
    
    return (
         <Grid  container spacing={2} direction="column">
            <Grid item  sx={{ mt: 4 }}>
                <Paper sx={{padding: 2}} variant="outlined" style={{width : 400}}>
                    <Typography variant="h4" sx={{ my : 2}}>
                        발주처
                    </Typography>
                    <Typography variant="h6">
                        {customerName}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item>
                <Paper sx={{padding: 2}} variant="outlined" style={{width : 400}}>
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