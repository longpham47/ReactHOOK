import React, { memo } from 'react'

 function Post(props) {
    console.log("post")
    return (
        <div>
             <h5 className="card-title">hôm nay trời đầy sao </h5>
                    <p className="card-text">
                        <img className="w-25" src="https://i.pravatar.cc/?u=477" alt="" />
                    </p>
                   
        </div>
    )
}
// memo : tự nhận biết dữ liệu statte có truyên xuôgs cho component hay khonng 
// => nếu có thì rendẻ lại dao diện UI của con và ngược lại ko rênnder
export default memo(Post) 