import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile() {

    // nếu người dùng dả da ng nhạp (có assect_token tbhì cho phép vào trang pròfile )
    // ngược lại thông báo và chuyển trang về  login

    


    if(!localStorage.getItem("accessaToken")){
        // néu chưa đang nhập
        alert("yêu cầu đang nhập")
        return <Redirect to ="/login"/>
    }
    return (
        <div className='container'>
            <div className="card w-25">
                <img className="card-img-top" src="https://i.pravatar.cc/?u=477" alt=""/>
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>


        </div>
    )
}
