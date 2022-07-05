import { RecoilRoot } from "recoil"
import { UserProvider } from "./providers/UserProvider";
import { RouterComponents } from "./router/Router";
import "./styles.css"

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <RouterComponents />
      </UserProvider>
    </RecoilRoot>
  );
};
