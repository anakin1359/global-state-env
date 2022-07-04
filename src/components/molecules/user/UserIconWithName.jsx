import styled from "styled-components";

export const UserIconWithName = (props) => {
    const { image, name, isAdmin } = props;
    return (
        <StyleContainer>
            <StyleImage
                src={image}
                alt={name}
                height={160}
                width={160}
            />
            <StyleName>{name}</StyleName>
            {/* isAdmin がtrueの場合に編集リンクを表示 */}
            {isAdmin && <StyleEdit>編集する</StyleEdit>}
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

const StyleEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`