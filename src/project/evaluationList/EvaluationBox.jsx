/* eslint-disable react/prop-types */
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Rating from '@mui/material/Rating';

const EvaluationBox = (props) => {
    let rows = [];
    let { list, selectRow }  = props;

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
        { field: 'col1', headerName: '피평가자', flex: 0.5  },
        { field: 'col2', headerName: '업무수행 평점',flex: 0.5, renderCell: (params) => {
            return (
                <Rating
                    readOnly
                    name="simple-controlled"
                    size="large"
                    value={params.row.col3 === '미평가' ? 0 : params.row.col3} />
            );
        }},
        { field: 'col3', headerName: '업무수행 내용',flex: 1  },
        { field: 'col4', headerName: '커뮤니케이션 평점', flex: 0.5, renderCell: (params) => {
            return (
                <Rating
                    readOnly
                    name="simple-controlled"
                    size="large"
                    value={params.row.col5 === '미평가' ? 0 : params.row.col5} />
            );
        }  },
        { field: 'col5', headerName: '커뮤니케이션 내용', flex: 1  },
    ];
    return (
        <div style={{ width: '100%'}}>
                <DataGrid 
                        autoHeight 
                        rows={rows} 
                        columns={columns} 
                        isRowSelectable={(params) => params.row.col2 === '미평가' }
                        onSelectionModelChange={(ids) => {
                            const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
                            selectRow(selectedRowsData[0].col1);
                        }}
                        hideFooter/>
        </div>
    )
}

export default EvaluationBox;

