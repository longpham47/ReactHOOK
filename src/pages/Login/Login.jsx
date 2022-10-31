import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';

// router => props history ,match




export default function Login(props) {
  // nếu đang nhập thanh công thì chuyển sang trang home
  // ngược lại không chuyên trang và hiẻn thị thông báo 

  // láy dữl iệu từ form 
  let [userAccount, setAccount] = useState({
    username: "",
    password: "",
    isLeaveForm: true
  })

  let handleInput = (e) => {
    let { id, value } = e.target;
    console.log(id, value)
    setAccount({
      ...userAccount,
      [id]: value,
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userAccount);
    if(userAccount.username === "bao447"){
      // đang nhập thành công => chuiuyern về home

      // api => login => home
      props.history.push("/home");  //?thư viện roter tự thêm vào props/ push() : chhuyển về comment theo yêu cầu url 

      // api => login(HOME) (GHI ĐÈ LỊCH SỮ TRÌNH DUYỆT)
      // props.history.replace("/home");


    }else{
      alert("tài khoảng không đúng ")
    }




  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit} className='w-50 py-5'>
        <div className="form-group">

          <input onChange={handleInput} type="text" className="form-control" id="username"  placeholder="enter username" />

          <input onChange={handleInput} type="password" className="form-control" id="password" placeholder="enter pass" />

        </div>
        <button className='btn btn-info'>login</button>
        <button className='btn btn-danger' type="button" onClick={()=>{
            props.history.goBack();
        }}> go back</button>
      </form>

      <Prompt when={userAccount.isLeaveForm} message ={(location)=>{
      
        return " bạn có chăt muốn rồi khỏi trang"
      }}/>
 
    </div>
  )
}

