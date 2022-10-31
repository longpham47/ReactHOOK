import React from 'react'

export default function Detail(props) {
    // maphim : tên tham số cần lấuý từ url
    // param trên url là dữ liệu không bão mật
  return (
    <div className='container'>
        <h1 className='alert alert-danger'>
            tham số (params ): {props.match.params.maPhim}
        </h1>
    </div>
  )
}
