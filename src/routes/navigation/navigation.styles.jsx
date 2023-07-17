import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    position: sticky;
    top: 0;
    z-index: 10;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    margin-right: 8px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover, &.active {
        transform: rotate(4deg) scale(1.05);
        color: white;
        background-color: black;
    }
`

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
