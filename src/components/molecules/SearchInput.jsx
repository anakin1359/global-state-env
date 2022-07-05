import { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/Primarybutton"
import { Input } from "../atoms/input/input";

export const SearchInput = memo(() => {
    console.log("[DEBUG] SearchInput: "); // memoを使用しているためpropsに変更がない限り更新されない
    return (
        <StyleContainer>
            <Input
                placeHolder="検索条件を入力"
            />
            <StyleButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </StyleButtonWrapper>
        </StyleContainer>
    );
});

const StyleContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyleButtonWrapper = styled.div`
    padding-left: 8px;
`