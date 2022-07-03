import { PrimaryButton } from "./components/atoms/button/Primarybutton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>primary button</PrimaryButton>
      <SecondaryButton>secondary button</SecondaryButton>
      <br />

      <SearchInput />
    </div>
  );
};
