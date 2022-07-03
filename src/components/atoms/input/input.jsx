import styled from "styled-components";

export const Input = (props) => {
    const { placeHolder = "" } = props;
    return (
        <StyleInput
            type="text"
            placeholder={placeHolder}
        />
    );
};

const StyleInput = styled.input`
    padding: 8px, 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
`