import React, { useState } from 'react'
import Tracker from './Tracker';

const Expense = ({yname,bank,balance}) => {
   const[expense1,setExpense1]=useState();
   const[expense2,setExpense2]=useState();
   const[expense3,setExpense3]=useState();
  
   const handleExpense=()=>{
      var netExpense=parseInt(expense1)+parseInt(expense2)+parseInt(expense3);
      return netExpense;
   }
  return (
    <>    
    <div className='main-expense'>
           <div className='expense-1'>
            <input type='text'  placeholder='expense1' />
            <input type='number' value={expense1} onChange={(e)=>setExpense1(e.target.value)} placeholder='amount'/>
           </div>
           <div className='expense-2'>
            <input type='text' placeholder='expense2' />
            <input type='number' value={expense2} onChange={(e)=>setExpense2(e.target.value)} placeholder='amount'/>
           </div>
           <div className='expense-3'>
            <input type='text' placeholder='expense3' />
            <input type='number' value={expense3} onChange={(e)=>setExpense3(e.target.value)} placeholder='amount'/>
           </div> 
    </div>
    <span className='total-expense'>
      Total Expense:{handleExpense()}</span>
    <div className='card'>
     <Tracker yname={yname} bank={bank} balance={parseInt(balance)-parseInt(handleExpense())}/>
     </div>
   </>
  )
}

export default Expense