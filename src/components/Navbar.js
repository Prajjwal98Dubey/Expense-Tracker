import React, { useState } from 'react'

const Navbar = () => {
    const[count,setCount]=useState(0)
    const changeTheme = () => {
        setCount(count+1);
        if (count%2===0) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.getElementById("theme-icon").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSPA4yE4tkuXomplYbpmvgOs2qvn_WWTf1g&usqp=CAU"
        }
        if(count%2!==0) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.getElementById('theme-icon').src = "https://cdn-icons-png.flaticon.com/128/727/727866.png"
        }
    }
    return (
        <>
            <div className='theme'>
            <div className='title'>
                    Expense Tracker...
                </div>
                <img id="theme-icon" src="https://cdn-icons-png.flaticon.com/128/727/727866.png" alt="loading..." onClick={changeTheme} />
            </div>
        </>
    )
}

export default Navbar