import { UserProvider } from "./providers/UserProvider";
import { RouterComponents } from "./router/Router";
import "./styles.css"

export default function App() {
  return (
    <UserProvider>
      <RouterComponents />
    </UserProvider>
  );
};
