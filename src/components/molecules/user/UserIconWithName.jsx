import styled from "styled-components";

export const UserIconWithName = (props) => {
    const { image, name } = props;
    return (
        <StyleContainer>
            <StyleImage
                src={image}
                alt={name}
                height={160}
                width={160}
            />
            <StyleName>{name}</StyleName>
        </StyleContainer>
    );
};

const StyleContainer = styled.div`
    text-align: center;
`

const StyleImage = styled.img`
    border-radius: 50%;
`

const StyleName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`