import { Delete } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface IClassDataGridProps {
    deleteOnClick: (value: number) => void;
}

export default function ClassDataGrid({deleteOnClick}:IClassDataGridProps) {
    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: "className",
            headerName: "Turma",
            flex: 0.4,
            renderCell: (params) => {
                return (
                    <Link to={`./${params.row.id}`}>
                        {params.row.className}
                    </Link>
                );
            }
        },
        { 
            field: "year",
            headerName: "Ano",
            flex: 0.4,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "component",
            headerName:"",
            flex: 0.1,
            align: "right",
            renderCell: (params) => {
                return (
                    <Button variant="outlined" color="error" onClick={(event) => deleteOnClick(params.row.id)}>
                        <Delete/>
                    </Button>
                )
            }
        }
    ]
    
    const rows = [
        { id: 1, className: 'DTA', year: 2000},
        { id: 2, className: 'DTA', year: 2000},
        { id: 3, className: 'DTA', year: 2000},
        { id: 4, className: 'DTA', year: 2000},
        { id: 5, className: 'DTA', year: 2000},
        { id: 6, className: 'DTA', year: 2000},
        { id: 7, className: 'DTA', year: 2000},
        { id: 8, className: 'DTA', year: 2000},
        { id: 9, className: 'DTA', year: 2000},
        { id: 10, className: 'DTA', year: 2000},
        { id: 21, className: 'DTA', year: 2000},
        { id: 22, className: 'DTA', year: 2000},
        { id: 23, className: 'DTA', year: 2000},
        { id: 24, className: 'DTA', year: 2000},
        { id: 25, className: 'DTA', year: 2000},
        { id: 26, className: 'DTA', year: 2000},
        { id: 27, className: 'DTA', year: 2000},
        { id: 28, className: 'DTA', year: 2000},
        { id: 29, className: 'DTA', year: 2000},
        { id: 210, className: 'DTA', year: 2000},
      ];

    return (
        <Box sx={{height: "100%", width: "100%"}}>
            <DataGrid 
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10
                        }
                    }
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
                >

            </DataGrid>
        </Box>
    )
}