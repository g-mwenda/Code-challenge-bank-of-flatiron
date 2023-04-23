import React from "react";


function TransactionItem({date,description,category,amount}){
    return (
        <tr >
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>
    )
}

export default TransactionItem;