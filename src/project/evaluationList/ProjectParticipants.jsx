/* eslint-disable react/prop-types */
import React from "react";
import { DataGrid } from '@mui/x-data-grid';


const ProjectParticipants = (props) => {
    const { projectParticipants } = props;
    let rows = [];

    for (let i = 0; i < projectParticipants.length; i++) {
        rows.push({
            id: i + 1,
            col1: projectParticipants[i].employeeName,
            col2: projectParticipants[i].jobType,
            col3: projectParticipants[i].joinDate.substr(0, projectParticipants[i].joinDate.indexOf('T', 0)),
            col4: projectParticipants[i].quitDate.substr(0, projectParticipants[i].quitDate.indexOf('T', 0)),
        });
    }
      
    const columns = [
        { field: 'id', headerName: '번호', flex: 0.5},
        { field: 'col1', headerName: '직원명', flex: 0.5  },
        { field: 'col2', headerName: '직무',flex: 0.5 },
        { field: 'col3', headerName: '참여일',flex: 1  },
        { field: 'col4', headerName: '참여 종료일', flex: 1 }
    ];
    return (
        <div style={{ width: '100%'}}>
                <DataGrid 
                        autoHeight 
                        rows={rows} 
                        columns={columns}                 
                        hideFooter/>
        </div>
    )
};

export default ProjectParticipants;