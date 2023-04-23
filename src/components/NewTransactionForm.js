import React,{ useState } from "react";

function NewTransactionForm({onTransactionSubmit}){
    const[newTransaction,setNewTransaction]=useState({
        date:"",
        description:"",
        category:"",
        amount:0,
    })

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;

        setNewTransaction({
          ...newTransaction,
          [name]: value,
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        onTransactionSubmit(newTransaction)
        setNewTransaction({
            date:"",
            description:"",
            category:"",
            amount:0,
        })
    }

    return(
        <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        id="newItem">
            <div className="form-inputs">
                <label htmlFor="date">Date:</label>
                <input value={newTransaction.date} name="date" type="date" id="date" />
                <input value={newTransaction.description} name="description" type="text" placeholder="Description" />
                <input value={newTransaction.category} name="category" type="text" placeholder="Category" />
                <input value={newTransaction.amount} placeholder="Amount" name="amount" type="number" step="0.01" />
            </div>
            <div>
                <button>Add Transaction</button>
            </div>
        </form>
    )

}

export default NewTransactionForm
