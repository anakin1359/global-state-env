import styled from "styled-components"
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
    const { user, isAdmin } = props;
    return (
        <Card>
            <UserIconWithName
                src={user.image}
                name={user.name}
                isAdmin={isAdmin}
            />

            <StyleDL>
                <dt>メール</dt>
                <dd>{user.email}</dd>

                <dt>TEL</dt>
                <dd>{user.phone}</dd>

                <dt>会社名</dt>
                <dd>{user.company.name}</dd>

                <dt>WEB</dt>
                <dd>{user.webSite}</dd>
            </StyleDL>
        </Card>
    );
};

const StyleDL = styled.dl`
    text-align: left;

    dt {
        float: left;
    }

    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`