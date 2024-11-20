import { calculateInvestmentResults,formatter } from "./investment";
export default function Results({investData}){
    console.log(investData);
    const resultData = calculateInvestmentResults(investData);
    return(
        <section >
            {<table id="result">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Intrest</th>
                    <th>ValueEndOftheYear</th>
                    <th>AnnualInvestment</th>
                </tr>
                </thead>
                <tbody className="center">
                    {resultData.map(
                        row => ( <tr key={row.year}><td>{row.year}</td><td>{formatter.format(row.interest)}</td><td>{row.valueEndOfYear}</td>
                        <td>{row.annualInvestment}</td></tr>)   
                    )
                    }
                </tbody>
            </table>
 }
 
        </section>
    );
}