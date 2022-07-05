import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `HUNTER×HUNTERが待ち遠しい三十路の男_${val}`,
        image: "https://source.unsplash.com/sI3ZbXyoojI",
        email: "abc123@sample.com",
        phone: "000-1234-5678",
        company: {
            name: "株式会社テスト",
        },
        webSite: "https://ja.wikipedia.org/wiki/HUNTER%C3%97HUNTER"
    };
}));

export const Users = () => {

    return (
        <StyleContainer>
            <h2>Users List</h2>
            <SearchInput />
            <StyleUserArea>
                {users.map((obj) => (
                    <UserCard
                        keys={obj.id}
                        user={obj}
                    />
                ))}
            </StyleUserArea>
        </StyleContainer>
    );
};

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const StyleUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`