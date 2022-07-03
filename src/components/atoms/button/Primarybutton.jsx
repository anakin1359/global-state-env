import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {

    const { children } = props;
    return (
        <StyleButton>{children}</StyleButton>
    );
};

const StyleButton = styled(BaseButton)`
    background-color: #40514e;
`
