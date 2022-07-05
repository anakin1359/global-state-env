import styled from "styled-components";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {

    const history = useHistory();
    const { setUserInfo } = useContext(UserContext);

    // 管理者ボタンが押された時に「setUserInfo」でグローバル変数「userInfo」の値を更新
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        history.push("/users");
    }

    // 一般ボタンが押された時に「setUserInfo」でグローバル変数「userInfo」の値を更新
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false })
        history.push("/users");
    }

    return (
        <StyleContainer>
            <h2>TOP Page</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
            <br/>
            <br/>
            <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
        </StyleContainer>
    )
};

const StyleContainer = styled.div`
    text-align: center;
`