import styled from "styled-components";

export const Card = (props) => {
    const { children } = props
    return (
        <StyleCard>{children}</StyleCard>
    );
};

const StyleCard = styled.div`
    background-color: #fff;
    box-shadow: #ddd 0px 0px 4px 2px; // bax-shadow x軸の距離、y軸の距離、ぼかしの距離、どれだけ広げるかの値
    border-radius: 8px;
    padding: 16px;
`