import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ICardLinkProps {
    link: string;
    title: string;
    icon?: ReactNode;
}

export default function CardLink({ link, title, icon }:ICardLinkProps) {
    return(
        <Link to={link} style={{ maxWidth: "300px" }}>
            <Box
                sx={{ 
                    backgroundColor: "lightgrey", 
                    padding: 3,
                    borderRadius: 2
                }}
            >
                { icon }
                <Typography
                    variant="h5"
                    textAlign="center"
                >{title}</Typography>
            </Box>
        </Link>
    )
}