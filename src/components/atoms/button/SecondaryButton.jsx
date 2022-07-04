import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {

    const { children, onClick } = props;
    return (
        <StyleButton onClick={onClick}>{children}</StyleButton>
    );
};

const StyleButton = styled(BaseButton)`
    background-color: #11999e;
`