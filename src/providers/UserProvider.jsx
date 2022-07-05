import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;

    // [注意] setUserInfoが更新された場合、その値を使用しているコンポーネントは全て再レンダリングされる
    const [userInfo, setUserInfo] = useState(null);

    return (
        // userInfoでグローバル参照が可能、setUserInfoを更新するとuserInfoの値が更新される
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};