import React,{useState, useEffect} from "react";
import Transactions from "./Transactions";
import Filter from "./Filter";
import NewTransactionForm from "./NewTransactionForm";


function App() {
  const[transactions, setTransactions]= useState([])
  const[search,setSearch]=useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + search)
      .then((response) => response.json())
      .then((transaction) => setTransactions(transaction))
      console.log({transactions})
  }, [search]);

  function addNewTransaction(newForm){
    setTransactions(transactions => [...transactions,newForm])

    const servers= {
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(newForm)
    }
    fetch("http://localhost:8001/transactions",servers )
      .then((response) => response.json())
      .then((newForm) => console.log(newForm))
  }

  function searching(e){
    e.preventDefault()
    setSearch(e.target.value)
}


  return (
      <div>
        <div className="header-container">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <div>
          <Filter searching={searching} />
        </div>
        <div>
          <NewTransactionForm onTransactionSubmit={addNewTransaction} />
        </div>
        <div>
          <Transactions transactions={transactions}/>
        </div>
      </div>
  );
}



  export default App;