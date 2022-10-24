import React, { useRef, useState } from 'react'

export default function UseRefDemo() {

    // let [userAccount, setUser] = useState({
    //     username: "",
    //     password: ""
    // }) //! rendể lại UI

    let [num, setNum] = useState(0)
    let user = {} //! render lại ko lưuu dk 
    
    let userAccRef = useRef({
        username: "",
        password: ""

    })

    let handleInput = (e) => {
        // e : event
        let { id, value } = e.target;

        
        userAccRef.current[id] = value // userAccRef.current.username = id;
     


        

        //  user = {

        //     ...user,
        //     [id]: value
        // }
        // console.log(user)

        // let newState = {
        //     ...userAccount,
        //     [id] : value
        // }
        // console.log(newState)
        // setUser(newState)

    }
    console.log("login");
    console.log(userAccRef) //! lưu được dữ liệu mà ko cần render UI
    return (
        <div className='container mt-5'>
            <div>number:{num} <button onClick={() => {
                setNum(num + 1)
            }}>tăng</button></div>
            <form className='w-50'>
                <div className="form-group">
                    <input onChange={handleInput} type="text" id="username" className="form-control" placeholder="enter username" aria-describedby="helpId" />

                </div>
                <div className="form-group">
                    <input onChange={handleInput} type="password" id="password" className="form-control" placeholder="enter password" aria-describedby="helpId" />

                </div>
                <button className='btn btn-info'>submit</button>
            </form>


        </div>
    )
}
