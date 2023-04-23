import React,{useState, useEffect} from "react";
import Transactions from "./Transactions";


function App() {
  const[transactions, setTransactions]= useState([])
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((transaction) => setTransactions(transaction))

  }, []);

  console.log({transactions})


  return (
      <div>
        <div className="header-container">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <div>
          <Transactions transactions={transactions}/>
        </div>
      </div>
  );
}



  export default App;