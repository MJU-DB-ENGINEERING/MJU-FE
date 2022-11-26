/* eslint-disable react/prop-types */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EvaluationBox from './EvaluationBox';
import ProjectParticipants from './ProjectParticipants';

export default function ControlledAccordions(props) {
  const { list, selectRow, btnClickHandler, btnActivated, projectParticipants } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            프로젝트 참여 인원
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProjectParticipants projectParticipants={projectParticipants} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>PM 평가</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <EvaluationBox list={list} selectRow={selectRow} />
            <Grid container justifyContent="flex-end" >
                <Button variant="outlined"
                        sx={{ padding: 1, margin: 2 }} 
                        onClick={btnClickHandler}
                        disabled={!btnActivated}>평가 시작
                </Button>
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            동료 평가
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EvaluationBox list={list} selectRow={selectRow} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}