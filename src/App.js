import { PrimaryButton } from "./components/atoms/button/Primarybutton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>primary button</PrimaryButton>
      <SecondaryButton>secondary button</SecondaryButton>
    </div>
  );
}
