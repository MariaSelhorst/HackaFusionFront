import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ICardLinkProps {
    link: string;
    title: string;
    icon?: ReactNode;
}

function getRandomColor():string {
    return `rgb(${Math.random() * (150 - 210) + 150}, ${Math.random() * (150 - 210) + 150}, ${Math.random() * (150 - 210) + 150})`
}

export default function CardLink({ link, title, icon }:ICardLinkProps) {
    return(
        <Link to={link} style={{ maxWidth: "300px" }}>
            <Box
                sx={{ 
                    backgroundColor: getRandomColor(), 
                    padding: 3,
                    borderRadius: 2,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center'
                }}
            >
                { icon }
                <Typography
                    variant="h5"
                    textAlign="center"
                    color={"white"}
                >{title}</Typography>
            </Box>
        </Link>
    )
}