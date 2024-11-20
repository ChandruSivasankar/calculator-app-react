import Header from "./Header"
import InputComp from "./InputComp";
import Results from "./util/Results";
import { useState } from "react";



function App() {

  const[investValues, setInvestValue] = useState({initialInvestment : 500,
    annualInvestment :1000,
    expectedReturn : 7,
    duration :12,});

function handleInvestVale(inputIdentifier,newValue){
setInvestValue((prev) => {
    return {
        ...prev,
        [inputIdentifier]: +newValue
    };
});
}

//const resultValues = calculateInvestmentResults(investValues);
//console.log(resultValues);


  return (
    <>
    <Header />
    <InputComp handleInvestVale={handleInvestVale} investValues={investValues}/>
    <Results  investData={investValues}/> 
    </>
   
  );
}

export default App
