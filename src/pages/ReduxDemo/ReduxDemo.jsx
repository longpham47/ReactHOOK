import React from 'react'
import { useSelector } from 'react-redux'

export default function ReduxDemo() {

    const { mangComment } = useSelector((state) => {

        return state.fakeBookReducer
    });
    console.log(mangComment);

    let renderComment = () => {
        return mangComment.map((post) => {
            return <div className="row" key={}>
                <div className="col-6">
                    <img className='img-fluid' src={post.avatar} alt="" />
                    </div>
                <div className="col-10">
                    <p>{post.username}</p>
                    <p>{post.comment}</p>
                </div>
            </div>
        })
    }






    return (
        <div className='container mt-5'>
            <div className="w-50">
                {renderComment()}

            </div>
            <form action="">
                <div className="form-group">
                    <input type="text" id="username" className="form-control" placeholder="Username" aria-describedby="helpId" />

                </div>
                <div className="form-group">
                    <input type="text" id="comment" className="form-control" placeholder="Comment" aria-describedby="helpId" />

                </div>
                <button className='btn btn-info'>Sent</button>
            </form>
        </div>
    )
}
