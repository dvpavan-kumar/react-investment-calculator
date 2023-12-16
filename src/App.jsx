import React,{useState} from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputs  from "./components/UserInput";
function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid= UserInput.duration>=1
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInputs UserInput={UserInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please Enter Valid duration Greaterthan Zero</p>}
     { inputIsValid && <Results input={UserInput}/>}
    </>
  );
}

export default App;
