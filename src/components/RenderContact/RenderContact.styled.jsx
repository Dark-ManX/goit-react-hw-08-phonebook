import styled from "@emotion/styled";
import { Button } from '@mui/material';

export const Item = styled.li`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;

&:not(:last-of-type) {
    margin-bottom: 10px;
}`

export const StyledButton = styled(Button)`
margin-left: 20px;`