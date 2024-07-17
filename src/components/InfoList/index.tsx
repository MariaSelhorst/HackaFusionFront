import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export class TableInfo {
    data1: string;
    data2?: string;

    constructor(data1: string, data2?: string) {
        this.data1 = data1;
        this.data2 = data2;
    }
}

type InfoListPropTypes = {
    firstColumn: string,
    secondColumn?: string,
    data: TableInfo[],
    width: string
}

export default function InfoList({firstColumn, secondColumn, data, width}:InfoListPropTypes) {
    data = data ? data : [];
    return (
        <>
            <TableContainer sx={{width: width}} component={Paper}>
                <Table aria-label="data table">
                    <TableHead>
                        <TableCell align="center">
                            <Typography variant="body1">{firstColumn}</Typography>
                        </TableCell>

                        {secondColumn && <TableCell align="center"><Typography variant="body1">{secondColumn}</Typography></TableCell>}
                        <TableCell/>
                    </TableHead>
                    <TableBody>
                        {data.map((value, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{value.data1}</TableCell>
                                {secondColumn && <TableCell align="center">{value.data2}</TableCell>}
                                <TableCell align="right">
                                    <Button sx={{color: "red", borderColor: "red"}} variant="outlined">
                                        <span className="material-symbols-outlined">delete</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}