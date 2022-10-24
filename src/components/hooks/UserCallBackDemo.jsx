import React, { useCallback, useState } from 'react'
import Post from './Post'

export default function UserCallBackDemo() {
    let [like, setLike] = useState(0)
    let [num, setNum] = useState(0)

    let renderLike = () => {
        console.log("like");
    }// tạo lại =>> dổi địa chỉ => memo tưởng đỏi chạy lại

//useCallback : luuw lại hàm tránh thay đoỏi khi render lại UI
//    let renderLikeCallBack =  useCallback(renderLike,[]);
   let renderLikeCallBack =  useCallback(renderLike,[like]);

    
    return (
        <div className='container pt-5'>
            <div className="card w-75">
                <div className="card-body">
                    <Post renderLike={renderLikeCallBack} />

                </div>
                <div>
                    like : <span>{like}</span> <span onClick={() => {
                        setLike(like + 1)
                    }} style={{ cursor: "pointer" }}>❤️</span>
                </div>
                <div>
                    number : {num} 
                    <button onClick={() => {
                        setNum(num + 1)
                    }} className="btn btn-info mx-2">tăng num</button>
                </div>
            </div>

        </div>
    )
}
