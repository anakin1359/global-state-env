import styled from "styled-components";
// import { useContext } from "react";                              // useStateで管理する場合はこちらを使用
// import { UserContext } from "../../providers/UserProvider";      // useStateで管理する場合はこちらを使用
import { useSetRecoilState } from "recoil"                          // 値の更新のみ行う(参照はしない)
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { userState } from "../../store/userState";                  // recoilでstate管理

export const Top = () => {

    const history = useHistory();
    // const { setUserInfo } = useContext(UserContext);  // useStateで管理する場合はこちらを使用
    const setUserInfo = useSetRecoilState(userState);    // recoilでstate管理

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