
//rfce

import { computeHeadingLevel } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'



function Counter() {
  // (0) : GIÁ TRỊ KHỞI TẠO
  //! hook khai báo trên cùng

  const [count, setCount] = useState(0); // trả về mảng 2 phần tử [giá  trị state ,séttate]


  const [user, setUser] = useState({
    id: 666,
    avatar: "https://i.pravatar.cc/?u=666",
  })

  return (
    // count nhận giá trị khởi toạ ccủa uséstate
    <div className='container'>

      count : {count}
      <button onClick={() => {
        console.log("clicke me")
        setCount(count + 1); // đổi gái trị của (count) và render lại UI

      }}>+</button>
      <div className='row'>
        <div className="col-3"><div className="card">
          <img className="card-img-top" src={user.avatar} alt="" />
          <div className="card-body">
            <button onClick={() => {
              // random số tuừ 0 -99
              let num = Math.floor(Math.random() * 100);
              let newUser = { ...user, avatar: `https://i.pravatar.cc/?u=${num}` }
              setUser(newUser);
              
                
              

            }} className='btn btn-info'>random</button>
          </div>
        </div>


        </div></div>
    </div>

  )
}

export default Counter

