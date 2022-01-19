import Input from "./components/input";

function App() {
  return (
    <div className="App">
      Learn Typescript
      <Input id="name" label="Username" />
      <Input id="password" label="Password" />
      <Input id="confirmPassword" label="ConfirmPassword" />
      <Input id="isChecked" label="Stay Logged In" type='checkbox'  />
    </div>
  );
}

export default App;
