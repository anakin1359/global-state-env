import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyleHeader>
            <StyleLink
                to="/"
            >
                Home
            </StyleLink>

            <StyleLink
                to="/users"
            >
                USERS
            </StyleLink>
        </StyleHeader>
    );
};

const StyleHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`

const StyleLink = styled(Link)`
    margin: 0 8px;
`