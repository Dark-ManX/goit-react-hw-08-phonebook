import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AppBarContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;`

export const AppBarItem = styled(NavLink)`
    font-family: 'Roboto', san-serif;

    &:not(:first-of-type) {
    margin-right: 25px;
    };

    &:last-of-type {
        margin-right: auto;
    }`

