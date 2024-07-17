import { styled } from "@mui/material";

export const StyledImage = styled("img")`
    position: absolute;
    left: 30px;
    bottom: 0;
    object-fit: cover;

    @media (max-width: 600px) {
        &{
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
`;