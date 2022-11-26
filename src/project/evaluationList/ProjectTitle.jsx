/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


const ProjectTitle = (props) => {
    const { projectTitle } = props.title;
    
    return (
        <>
        <Box>
            <Typography variant="h4" sx={{ my: 3 }}>
                {projectTitle}
                <Divider />
            </Typography>
        </Box>
        </>
    );
};

export default ProjectTitle;