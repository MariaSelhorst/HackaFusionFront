import { styled } from "@mui/material";

export const StudentButtonIconContainer = styled("div")`
    width: 30%;
`;

export const StudentButtonText = styled("p")`
    text-align: center;
    font-size: 2em;
`;

export const StudentButton = styled("button")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 180px;
    width: 200px;
    border-radius: 20px;
    border: 1px solid gray;
    padding: 45px;
    box-shadow: 1px 1px 10px gray;
    transition: 300ms;

    &:hover {
        transform: scale(1.05);
    }
 `;


export const StudentButtonGroup = styled("div")`
    display: flex;
    justify-content: center;
    gap: 30px;
    height: 300px;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    position: absolute;
    padding-top: 100px;


    @media (max-width: 600px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`;