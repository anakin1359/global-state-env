import styled from "styled-components";
import React, {
    memo,
    // useContext,   // useStateで管理する場合はこちらを使用
} from "react";
// import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";              // 値の参照のみ行う(変更は行わない)
import { userState } from "../../../store/userState"; // recoilでstate管理

export const UserIconWithName = memo((props) => {
    console.log("[DEBUG] UserIconWithName: ");    // memoを使用しているためpropsに変更がない限り更新されない
    const { image, name } = props;

    // const { userInfo } = useContext(UserContext); // userのcontextを引数に渡す(useStateで管理する場合はこちらを使用)
    const userInfo = useRecoilValue(userState);       // recoilでstate管理

    const isAdmin = userInfo ? userInfo.isAdmin : false;
    console.log("What's isAdmin bool?: ", isAdmin);

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
});

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