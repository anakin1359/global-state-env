import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/Primarybutton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/template_form/DefaultLayout";
import "./styles.css"

const user = {
  name: "HUNTER×HUNTERが待ち遠しい三十路の男",
  image: "https://source.unsplash.com/sI3ZbXyoojI",
  email: "abc123@sample.com",
  phone: "000-1234-5678",
  company: {
    name: "株式会社テスト",
  },
  webSite: "https://ja.wikipedia.org/wiki/HUNTER%C3%97HUNTER"
}

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>primary button</PrimaryButton>
        <SecondaryButton>secondary button</SecondaryButton>
        <br />

        <SearchInput />
        <UserCard
          user={user}
        />
      </DefaultLayout>
    </BrowserRouter>
  );
};
