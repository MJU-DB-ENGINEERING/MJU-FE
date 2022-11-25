/* eslint-disable react/prop-types */
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
const EvaluationBox = (props) => {
    let rows = [];
    let { list }  = props;

    for (let i = 0; i <list.length; i++) {
        rows.push({
            id: i + 1,
            col1: list[i].evaluated === null ? '미평가' : list[i].evaluated,
            col2: list[i].communicationComment === null ? '미평가' : list[i].communicationComment,
            col3: list[i].communicationRate === null ? '미평가' : list[i].communicationRate,
            col4: list[i].businessComment === null ? '미평가' : list[i].businessComment,
            col5: list[i].businessRate === null  ? '미평가' : list[i].businessRate
        });
    }
      
    const columns = [
        { field: 'col1', headerName: '피평가자', width: 150 },
        { field: 'col2', headerName: '업무수행 평점', width: 150 },
        { field: 'col3', headerName: '업무수행 내용', width: 150 },
        { field: 'col4', headerName: '커뮤니케이션 평점', width: 150 },
        { field: 'col5', headerName: '커뮤니케이션 내용', width: 150 },
    ];
    return (
        <div style={{ width: 860}}>
                <DataGrid autoHeight rows={rows} columns={columns} hideFooter/>

        </div>
    )
}

export default EvaluationBox;

