import React, { useState } from 'react'
import Expense from './Expense';
import Tracker from './Tracker'

const UserDetails = () => {
    const[yname,setYName]=useState('');
    const[bank,setBank] = useState('');
    const[balance,setBalance]=useState();
      return (
    <>
    <div className='user'>
      <form>
       <div className='input-name'><input type="text" value={yname} onChange={(e)=>setYName(e.target.value)} placeholder='Your Name'/></div>
        <div className='input-bank'><input type="text" value={bank}  onChange={(e)=>setBank(e.target.value)} placeholder='Your Bank'/></div>
       <div className='input-balance'><input type='number' value={balance} onChange={(e)=>setBalance(e.target.value)} placeholder='Your balance'/></div>
      </form>
      </div>
      <Expense yname={yname} bank={bank}  balance={balance}/>
  
    </>
  )
}

export default UserDetails