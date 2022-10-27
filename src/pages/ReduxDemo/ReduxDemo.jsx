import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_COMMENT } from '../../redux/types/fakeBookType';
import { addCommentAction } from "../../redux/action/fakeBookAction"

export default function ReduxDemo() {

     // lưu các giá trị lấy từ form
     const [ useComment, setUseCommnet ] = useState({
        username: "",
        comment: "",

    })

   //! useSelector
    const { mangComment } = useSelector((state) => {

        return state.fakeBookReducer
    });
    // const {mangComment} = useSelector (state => state.fakeBookReducer); // rút gọn 

   
    //!useDispatch
    let dispatch = useDispatch()


    let renderComment = () => {
        return mangComment.map((post) => {
            return <div className="row" key={post.username}>
                <div className="col-2   ">
                    <img className='img-fluid' src={post.avatar} alt="" />
                </div>
                <div className="col-10">
                    <p>{post.username}</p>
                    <p>{post.comment}</p>
                </div>
            </div>
        })
    }


    let handelInput  = (e) => {
        let {id , value} = e.target;
        // console.log(id,value);
        setUseCommnet ({
            ...useComment,
            [id]: value

        })

    }
    // console.log(useComment)
   let  handleSubmit = (e) => {
        e.preventDefault();// ngăn loading lại trang
        
        //! tạo action : loại 1 : action là object
    
        let action = addCommentAction(useComment)
          
      
        dispatch(action);
        
        //!action creator
        // loại 2 : action là funtion ( tách acitron 1 file riêng dể quán lý code )




    }

    return (
        <div className='container mt-5'>
            <div className="w-50">
                {renderComment()}

            </div>
            <form onSubmit={handleSubmit} action="">
                <div className="form-group">
                    <input onChange={handelInput} type="text" id="username" className="form-control" placeholder="Username" aria-describedby="helpId" />

                </div>
                <div className="form-group">
                    <input onChange={handelInput} type="text" id="comment" className="form-control" placeholder="Comment" aria-describedby="helpId" />

                </div>
                <button className='btn btn-info'>Sent</button>
            </form>
        </div>
    )
}
