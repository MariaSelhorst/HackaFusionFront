import { Box } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface IStudentGraphicProps {
    data: any[]
}

export default function StudentGraphic({ data }:IStudentGraphicProps) {
    
    
    return(
        <Box sx={{ marginTop: 4, overflowX: "auto", overflowY: "hidden", width: "80vw" }}>
            <ResponsiveContainer width={700} height={300} >
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Bar dataKey="Turma" fill="#5880de" activeBar={<Rectangle fill="#759ce8" stroke="#214bad" />} />
                    <Bar dataKey="Aluno" fill="#7db895" activeBar={<Rectangle fill="#67d085" stroke="#176b30" />} /> */}
                    <Bar dataKey="Turma" fill="#b064cb" activeBar={<Rectangle fill="#bd7ed6" stroke="#784d88" />} />
                    <Bar dataKey="Aluno" fill="#637bc1" activeBar={<Rectangle fill="#8499d7" stroke="#475c96" />} />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    ) 
}