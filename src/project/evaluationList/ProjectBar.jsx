import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', mb: 7 }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Typography variant="h3" component="div" color="text.secondary">
                {`${Math.round(props.value)}%`}
            </Typography>
            </Box>
        </Box>
    );
}

CircularProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate variant.
 * Value between 0 and 100.
 * @default 0
 */
value: PropTypes.number.isRequired,
};


const ProjectBar = () => {
   
    return (
        <>
            <Typography variant="h4" component="div" align="center" sx={{ my: 2 }}>
                프로젝트 진행률
            </Typography>
            <Box align="center">
                    <CircularProgressWithLabel size="15rem" value={95} />
            </Box>
        </>
    )
}

export default ProjectBar;