import { useState } from "react";

export default function InputComp({investValues,handleInvestVale}){




    return (
        <section id="user-input">
            <div className="input-group">
            <p>
            <label htmlFor="initial">Initial Investment</label>
            <input id="initial" type="number" value={investValues.initialInvestment} required 
             onChange={(event) => handleInvestVale("initialInvestment",event.target.value)}/>
            </p>
            <p>
            <label htmlFor="annual">Annual Investment</label>
            <input id="annual" type="number" required 
            value={investValues.annualInvestment}
            onChange={(event) => handleInvestVale("annualInvestment",event.target.value)}/>
            </p>
            </div>

            <div className="input-group">

            <p>
            
            <label htmlFor="expected">Expected Return</label>
            <input id="expected" type="number" required 
            value={investValues.expectedReturn}
            onChange={(event) => handleInvestVale("expectedReturn",event.target.value)}/>
            </p>

            <p>

            <label htmlFor="duration">Duration</label>
            <input id="duration" type="number" required 
            value={investValues.duration}
            onChange={(event) => handleInvestVale("duration",event.target.value)}/>
            </p>
            </div>
            
            
            

            
        
        </section>
    );
}