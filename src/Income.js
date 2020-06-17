import React, {useContext} from 'react';
import {GlobalContext} from './Context';



function Income  () {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    // const total = amounts.reduce((acc, item) => (acc += item), 0)
    // .toFixed(2);

    const inc =amounts
    // .filter(item => item > 0)
     .reduce((acc, item) => (acc += item), 0)
    // .toFixed(2);

    // const exp = (amount.filter(item => item < 0)
    // .reduce((acc, item) => (acc, item), 0)*-1)
    // .toFixed(2);


    return (

            <div className="add">
                <div className="income"> 


                    <h2>Total Income  </h2> 
                
                    <span>$ {inc}</span>
                   
                    

                </div>


                <div className="expense"> 


                    <h2>Total Expense</h2>
                    
                    <span>$</span>

                
                </div>
               
            </div>

    )
}

export default Income;