import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;
    const contextName = "HUNTER×HUNTERが待ち遠しい三十路の男";

    return (
        // contextの内容を参照 (グローバルに参照できる値はProviderのvalueで指定可能)
        <UserContext.Provider value={{ contextName }}>
            {children}
        </UserContext.Provider>
    );
};