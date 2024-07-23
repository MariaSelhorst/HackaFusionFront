import { Box } from "@mui/material";
import { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { UserContext } from "../../../../providers/UserContext";

interface IStudentGraphicProps {
    data: any[]
}

export default function StudentGraphic({ data }:IStudentGraphicProps) {
    const {user, token} = useContext(UserContext);
    
    return(
        <Box sx={{ marginTop: 4, overflowX: "auto", overflowY: "hidden", width: "80vw", maxWidth: "100%" }}>
            <ResponsiveContainer width="95%" height={600}>
                <BarChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="Score" fill="#b064cb" activeBar={<Rectangle fill="#bd7ed6" stroke="#784d88" />} />
                    { user?.role !== "STUDENT" && 
                    <Bar dataKey="class_score" name="Class score" fill="#637bc1" activeBar={<Rectangle fill="#8499d7" stroke="#475c96" />} />
                    }
                </BarChart>
            </ResponsiveContainer>
        </Box>
    ) 
}